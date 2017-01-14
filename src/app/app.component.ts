import { Component } from '@angular/core';
import { Operation } from './common/operation.model';
import {
    ADD_OPERATION,
    INCREMENT_OPERATION,
    DECREMENT_OPERATION,
    REMOVE_OPERATION
} from './common/operations';
import { Store } from '@ngrx/store';
import { State } from './common/operations';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public id: number = 0;
    public operations: Observable<Store<Operation>>;

    public formData = {
        reason: '',
        amount: ''
    };

    constructor(private _store: Store<State>) {
        _store.select('allOperations').subscribe(console.log.bind(console));
        this.operations = _store.select('allOperations');
    }

    addOperation(operation) {
        this._store.dispatch({
            type: ADD_OPERATION, payload: {
                id: ++this.id,
                reason: operation.reason,
                amount: parseInt(operation.amount, 10)
            }
        });
    }

    incrementOperation(operation) {
        this._store.dispatch({type: INCREMENT_OPERATION, payload: operation});
    }

    decrementOperation(operation) {
        this._store.dispatch({type: DECREMENT_OPERATION, payload: operation});
    }

    deleteOperation(operation) {
        this._store.dispatch({type: REMOVE_OPERATION, payload: operation});
    }
}
