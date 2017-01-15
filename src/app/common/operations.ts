import { Action } from '@ngrx/store';
import { Operation } from './operation.model';
import * as operations from '../actions/operations';

export interface State {
    operations: Operation[];
}

// initial state of the operations
const initialState: State = {
    operations: [],
};

function operationReducer(state = initialState, action: Action) {
    switch (action.type) {
        case operations.ActionTypes.ADD_OPERATION: {
            const operation: Operation = action.payload;
            return {
                operations: [...state.operations, operation]
            };
        }

        case operations.ActionTypes.INCREMENT_OPERATION: {
            const amount: number = ++action.payload.amount;
            return {
                operations: state.operations.map(item => {
                    return item.id === action.payload.id ? Object.assign({}, item, {amount}) : item;
                })
            };
        }

        case operations.ActionTypes.DECREMENT_OPERATION: {
            const amount: number = --action.payload.amount;
            return {
                operations: state.operations.map(item => {
                    return item.id === action.payload.id ? Object.assign({}, item, {amount}) : item;
                })
            }
        }

        case operations.ActionTypes.REMOVE_OPERATION:
            return {
                operations: state.operations.filter(operation => {
                    return operation.id !== action.payload.id;
                })
            };

        default:
            return state;
    }
}

export { operationReducer as reducer };