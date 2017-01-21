import * as currencies from '../actions/currencies';
import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs';

/*
 The sate object needs to have three properties:
 1. A property for keeping a list of the available currencies
 2. A property for keeping the selected currency
 3. A property for keeping the list of exchange rates
 */

export interface CurrencyState {
    entities: Array<String>
    selectedCurrency: string | null
    rates: string,
    loadingRates: boolean
}

const initialState: CurrencyState = {
    entities: ['GBP', 'EUR'],
    selectedCurrency: 'EUR',
    rates: '',
    loadingRates: false
};

function currencyReducer(state = initialState, action: currencies.Actions): CurrencyState {

    switch (action.type) {
        case currencies.ActionTypes.CHANGE_CURRENCY: {
            return {
                entities: state.entities,
                selectedCurrency: action.payload,
                rates: state.rates,
                loadingRates: false
            };
        }

        case currencies.ActionTypes.LOAD_CURRENCY_RATES: {
            return {
                entities: state.entities,
                selectedCurrency: state.selectedCurrency,
                rates: state.rates,
                loadingRates: true
            };
        }

        case currencies.ActionTypes.LOAD_RATES_COMPLETE: {
            return {
                entities: state.entities,
                selectedCurrency: state.selectedCurrency,
                rates: action.payload,
                loadingRates: false
            };
        }

        default:
            return state;
    }
}

export { currencyReducer as reducer }

export function getCurrenciesEntities() {
    return (state$: Observable<CurrencyState>) => state$.select(s => s.entities);
}

export function getSelectedCurrency() {
    return (state$: Observable<CurrencyState>) => state$.select(s => s.selectedCurrency);
}

export function getRatesCurrency() {
    return (state$: Observable<CurrencyState>) => state$.select(s => s.rates);
}

