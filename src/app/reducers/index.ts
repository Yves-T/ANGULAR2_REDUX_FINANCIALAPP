import { combineReducers, ActionReducer } from '@ngrx/store';

import * as fromOperations from '../reducers/operations';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core';

import '@ngrx/core/add/operator/select';

export interface AppState {
    operations: fromOperations.OperationState
}

const reducers = {
    operations: fromOperations.reducer
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
