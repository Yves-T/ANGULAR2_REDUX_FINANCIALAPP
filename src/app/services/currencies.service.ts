import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrenciesService {

    constructor(private http: Http) {
        // noop
    }

    loadCurrencies() {
        console.log('>>>> loading currencies');
        return this.http.get('http://api.fixer.io/latest?base=USD')
            .map(response => {
                let body = response.json();
                return body.rates;
            });
    }
}
