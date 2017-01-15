import { Component } from '@angular/core';
import { Operation } from './common/operation.model';
import * as operations from '../app/actions/operations';
import { Store } from '@ngrx/store';
import { State } from './reducers/operations';
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
        this._store.dispatch(new operations.AddOperationAction({
            id: ++this.id,
            reason: operation.reason,
            amount: parseInt(operation.amount, 10)
        }));
    }

    incrementOperation(operation) {
        this._store.dispatch(new operations.IncrementOperationAction(operation));
    }

    decrementOperation(operation) {
        this._store.dispatch(new operations.DecrementOperationAction(operation));
    }

    deleteOperation(operation) {
        this._store.dispatch(new operations.RemoveOperationAction(operation));
    }
}
