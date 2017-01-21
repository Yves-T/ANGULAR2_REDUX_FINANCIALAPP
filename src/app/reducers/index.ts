import { combineReducers, ActionReducer } from '@ngrx/store';

import * as fromOperations from '../reducers/operations';
import * as fromCurrencies from '../reducers/currencies';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core';

import '@ngrx/core/add/operator/select';

export interface AppState {
    operations: fromOperations.OperationState,
    currencies: fromCurrencies.CurrencyState
}

const reducers = {
    operations: fromOperations.reducer,
    currencies: fromCurrencies.reducer,
};

const combineReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combineReducer(state, action);
}

export function getOperationState() {
    return (state$: Observable<AppState>) => state$.select(s => s.operations);
}

export function getEntities() {
    return compose(fromOperations.getEntities(), getOperationState());
}

export function getCurrencyState() {
    return (state$: Observable<AppState>) => state$.select(s => s.currencies);
}

export function getCurrencyEntities() {
    return compose(fromCurrencies.getCurrenciesEntities(), getCurrencyState());
}

export function getSelectedCurrency() {
    return compose(fromCurrencies.getSelectedCurrency(), getCurrencyState());
}

export function getCurrencyRates() {
    return compose(fromCurrencies.getRatesCurrency(), getCurrencyState());
}
