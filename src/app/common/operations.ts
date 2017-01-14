import { ActionReducer, Action } from '@ngrx/store';
import { Operation } from './operation.model';

//definitions of the actions that alter the state
export const ADD_OPERATION = 'Add an operation';
export const REMOVE_OPERATION = 'Remove an operation';
export const INCREMENT_OPERATION = 'Increment an operation';
export const DECREMENT_OPERATION = 'Decrement an operation';

export interface State {
    operations: Operation[];
}

// initial state of the operations
const initialState: State = {
    operations: [],
};

function operationReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_OPERATION: {
            const operation: Operation = action.payload;
            return Object.assign({}, state, {
                operations: [...state.operations, operation]
            });
        }

        case INCREMENT_OPERATION: {
            const amount: number = ++action.payload.amount;
            return Object.assign({}, state, {
                    operations: state.operations.map(item => {
                        return item.id === action.payload.id ? Object.assign({}, item, {amount}) : item;
                    })
                }
            );
        }

        case DECREMENT_OPERATION: {
            const amount: number = --action.payload.amount;
            return Object.assign({}, state, {
                    operations: state.operations.map(item => {
                        return item.id === action.payload.id ? Object.assign({}, item, {amount}) : item;
                    })
                }
            );
        }

        case REMOVE_OPERATION:
            return Object.assign({}, state, {
                    operations: state.operations.filter(operation => {
                        return operation.id !== action.payload.id;
                    })
                }
            );

        default:
            return state;
    }
}

export { operationReducer as reducer };