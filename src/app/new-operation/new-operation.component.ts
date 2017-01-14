import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Operation } from '../common/operation.model';

@Component({
    selector: 'app-new-operation',
    templateUrl: './new-operation.component.html',
    styleUrls: ['./new-operation.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewOperationComponent {

    public operation: Operation;

    @Output() addOperation = new EventEmitter();

    constructor() {
        this.operation = new Operation();
    }
}
