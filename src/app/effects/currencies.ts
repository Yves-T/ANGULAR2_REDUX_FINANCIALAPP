import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as currencyActions from '../actions/currencies';

import { CurrenciesService } from '../services/currencies.service';
import { LoadRatesCompleteAction } from "../actions/currencies";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CurrencyEffects {
    constructor(private _actions: Actions,
                private _currencyService: CurrenciesService) {
        // noop
    }

    // The effects for different states are singletons that 'intercept' dispatched actions that are being sent to
    // the reducer.

    @Effect() loadCategories$ = this._actions.ofType(currencyActions.ActionTypes.LOAD_CURRENCY_RATES)
        .switchMap(() => this._currencyService.loadCurrencies()
            .map((rates) => new LoadRatesCompleteAction(rates))
            .catch(() => Observable.of(new LoadRatesCompleteAction('')))
        );
}