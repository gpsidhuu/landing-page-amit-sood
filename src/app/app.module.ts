import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { errorTailorImports, FormActionDirective, provideErrorTailorConfig } from "@ngneat/error-tailor";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { KeyFilterModule } from "primeng/keyfilter";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormActionDirective, errorTailorImports, KeyFilterModule,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideErrorTailorConfig({
      errors: {
        useValue: {
          required: 'This field is required',
          email: 'Invalid Email Address',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
