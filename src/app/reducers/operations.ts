import { Action } from '@ngrx/store';
import { Operation } from '../common/operation.model';
import * as operations from '../actions/operations';
import { Observable } from 'rxjs';
import '@ngrx/core/add/operator/select';

export interface OperationState {
    operations: Array<Operation>;
}

// initial state of the operations
const initialState: OperationState = {
    operations: [],
};

function operationReducer(state = initialState, action: Action): OperationState {
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

export function getEntities() {
    return (state$: Observable<OperationState>) => state$.select(s => s.operations);
}
