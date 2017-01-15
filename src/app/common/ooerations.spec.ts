/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import {
    reducer as operationReducer
} from '../reducers/operations';

import * as operations from '../actions/operations';
import { expect } from 'chai';

describe('Operation reduce', () => {
    beforeEach(() => {
        // noop
    });

    it('should return default state', async(() => {
        const state = operationReducer({operations: []}, {type: 'whatever'});
        expect(state).to.deep.equal({operations: []});
    }));

    it(`should add to operations'`, async(() => {
        // arrange
        const action = {
            type: operations.ActionTypes.ADD_OPERATION,
            payload: {id: 123, amount: 456, reason: 'some reason'}
        };
        const stateBefore = {operations: []};

        Object.freeze(action);
        Object.freeze(stateBefore);

        // act
        const reducerResult = operationReducer(stateBefore, action);

        // assert
        expect(reducerResult.operations).to.length(1);
        expect(reducerResult.operations[0].id).to.equal(123);
        expect(reducerResult.operations[0].amount).to.equal(456);
        expect(reducerResult.operations[0].reason).to.equal('some reason');
    }));

    it('should increment operation', async(() => {
        // arrange
        const action = {
            type: operations.ActionTypes.INCREMENT_OPERATION,
            payload: {id: 124, amount: 200, reason: 'second reason'}
        };
        const stateBefore = {
            operations: [
                {id: 123, amount: 100, reason: 'some reason'},
                {id: 124, amount: 200, reason: 'second reason'},
                {id: 125, amount: 300, reason: 'third reason'}
            ]
        };

        Object.freeze(action);
        Object.freeze(stateBefore);

        // act
        const reducerResult = operationReducer(stateBefore, action);

        // assert
        expect(reducerResult.operations).to.length(3);
        const testOperation = reducerResult.operations.find(item => item.id === 124);
        expect(testOperation).to.not.be.undefined;
        expect(testOperation.id).to.equal(124);
        expect(testOperation.amount).to.equal(201);
    }));

    it('should decrement operation', async(() => {
        // arrange
        const action = {
            type: operations.ActionTypes.DECREMENT_OPERATION,
            payload: {id: 125, amount: 300, reason: 'third reason'}
        };
        const stateBefore = {
            operations: [
                {id: 123, amount: 100, reason: 'some reason'},
                {id: 124, amount: 200, reason: 'second reason'},
                {id: 125, amount: 300, reason: 'third reason'}
            ]
        };

        Object.freeze(action);
        Object.freeze(stateBefore);

        // act
        const reducerResult = operationReducer(stateBefore, action);

        // assert
        expect(reducerResult.operations).to.length(3);
        const testOperation = reducerResult.operations.find(item => item.id === 125);
        expect(testOperation).to.not.be.undefined;
        expect(testOperation.id).to.equal(125);
        expect(testOperation.amount).to.equal(299);
    }));

    it('should remove operation', async(() => {
        // arrange
        const action = {
            type: operations.ActionTypes.REMOVE_OPERATION,
            payload: {id: 124}
        };
        const stateBefore = {
            operations: [
                {id: 123, amount: 100, reason: 'some reason'},
                {id: 124, amount: 200, reason: 'second reason'},
                {id: 125, amount: 300, reason: 'third reason'}
            ]
        };

        Object.freeze(action);
        Object.freeze(stateBefore);

        // act
        const reducerResult = operationReducer(stateBefore, action);

        // assert
        expect(reducerResult.operations).to.length(2);
        const testOperation = reducerResult.operations.find(item => item.id === 124);
        expect(testOperation).to.be.undefined;
    }));

});
