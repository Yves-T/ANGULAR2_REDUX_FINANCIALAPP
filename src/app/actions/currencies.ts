import { Action } from '@ngrx/store';

export const ActionTypes = {
    CHANGE_CURRENCY: 'Change currency',
    LOAD_CURRENCY_RATES: 'Loading currency rates',
    LOAD_RATES_COMPLETE: 'Loading currency rates is complete'
};

export class ChangeCurrencyAction implements Action {
    type: string = ActionTypes.CHANGE_CURRENCY;

    constructor(public payload: string) {
        // noop
    }
}

export class LoadCurrencyRatesAction implements Action {
    type: string = ActionTypes.LOAD_CURRENCY_RATES;

    constructor(public payload: string) {
        // noop
    }
}

export class LoadRatesCompleteAction implements Action {
    type: string = ActionTypes.LOAD_RATES_COMPLETE;

    constructor(public payload: string) {
        // noop
    }
}

export type Actions
    = ChangeCurrencyAction |
    LoadCurrencyRatesAction |
    LoadRatesCompleteAction
