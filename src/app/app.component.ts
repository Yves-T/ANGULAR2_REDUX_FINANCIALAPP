import { Component } from '@angular/core';
import { Operation } from './common/operation.model';
import * as operations from '../app/actions/operations';
import * as currencies from '../app/actions/currencies';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    getEntities,
    getSelectedCurrency,
    getCurrencyEntities
} from './reducers/index';
import 'rxjs/add/operator/let';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public id: number = 0;
    public operations: Observable<Array<Operation>>;
    public currencies: Observable<string[]>;
    public selectedCurrency: Observable<string>;

    public formData = {
        reason: '',
        amount: ''
    };

    constructor(private _store: Store<any>) {
        this.operations = _store.let(getEntities());
        this.currencies = _store.let(getCurrencyEntities());
        this.selectedCurrency = _store.let(getSelectedCurrency());

        this.operations.subscribe(console.log.bind(console));
        this.currencies.subscribe(console.log.bind(console));

        _store.dispatch( new currencies.LoadCurrencyRatesAction(''))
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

    onCurrencySelected(currency: string) {
        console.log(currency);
        this._store.dispatch(new currencies.ChangeCurrencyAction(currency));
    }
}
