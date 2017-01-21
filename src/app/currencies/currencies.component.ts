import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-currencies',
    templateUrl: './currencies.component.html',
    styleUrls: ['./currencies.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrenciesComponent {

    @Input() currencies: Array<string>;
    @Input() selectedCurrency: string;
    @Output() currencySelected = new EventEmitter();

    constructor() {

    }

    test() {
        console.log('changed');
    }

}
