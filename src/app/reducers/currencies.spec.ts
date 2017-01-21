/* tslint:disable:no-unused-variable */

import { async } from '@angular/core/testing';
import {
    reducer as currencyReducer
} from './currencies';

import * as currencies from '../actions/currencies';
import { expect } from 'chai';

describe('Currency reducer', () => {
    beforeEach(() => {
        // noop
    });

    it(`should change currency`, async(() => {
        // arrange
        const action = new currencies.ChangeCurrencyAction('some currency');
        const stateBefore = {
            entities: ['GBP', 'EUR'],
            selectedCurrency: null,
            rates: []
        };

        Object.freeze(action);
        Object.freeze(stateBefore);

        // act
        const reducerResult = currencyReducer(stateBefore, action);

        // assert
        expect(reducerResult.selectedCurrency).to.equal('some currency');
    }));
});
