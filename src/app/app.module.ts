import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { reducer } from './common/operations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';

@NgModule({
    declarations: [
        AppComponent,
        NewOperationComponent,
        OperationListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore({allOperations: reducer}),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
