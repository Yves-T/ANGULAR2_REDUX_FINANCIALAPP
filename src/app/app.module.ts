import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { reducer } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrenciesService } from './services/currencies.service';
import { CurrencyEffects } from './effects/currencies';
import { EffectsModule } from '@ngrx/effects';
import { CustomCurrencyPipe } from './currency.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NewOperationComponent,
        OperationListComponent,
        CurrenciesComponent,
        CustomCurrencyPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        NgbModule.forRoot(),
        EffectsModule.run(CurrencyEffects),
    ],
    providers: [CurrenciesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
