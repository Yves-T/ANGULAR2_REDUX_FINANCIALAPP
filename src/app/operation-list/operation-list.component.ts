import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Operation } from '../common/operation.model';

@Component({
    selector: 'app-operation-list',
    templateUrl: './operation-list.component.html',
    styleUrls: ['./operation-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationListComponent {
    @Input() operations: Array<Operation>;
    @Input() selectedCurrency: any;

    constructor() {
        // noop
    }

    @Output() deleteOperation = new EventEmitter();
    @Output() incrementOperation = new EventEmitter();
    @Output() decrementOperation = new EventEmitter();
}
