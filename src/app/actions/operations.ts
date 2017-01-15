import { Action } from '@ngrx/store';
import { Operation } from '../common/operation.model';

export const ActionTypes = {
    ADD_OPERATION: 'Add an operation',
    REMOVE_OPERATION: 'Remove an operation',
    INCREMENT_OPERATION: 'Increment an operation',
    DECREMENT_OPERATION: 'Decrement an operation',
};

export class AddOperationAction implements Action {
    type: string = ActionTypes.ADD_OPERATION;

    constructor(public payload: Operation) {
        // noop
    }
}

export class RemoveOperationAction implements Action {
    type: string = ActionTypes.REMOVE_OPERATION;

    constructor(public payload: Operation) {
        // noop
    }
}

export class IncrementOperationAction implements Action {
    type: string = ActionTypes.INCREMENT_OPERATION;

    constructor(public payload: Operation) {
        // noop
    }
}

export class DecrementOperationAction implements Action {
    type: string = ActionTypes.DECREMENT_OPERATION;

    constructor(public payload: Operation) {
        // noop
    }
}

export type Actions
    = AddOperationAction |
    RemoveOperationAction |
    IncrementOperationAction |
    DecrementOperationAction
