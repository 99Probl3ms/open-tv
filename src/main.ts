/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatMenuModule } from '@angular/material/menu';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { ToastrModule } from 'ngx-toastr';
import { NgbTooltipModule, NgbModalModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, AppRoutingModule, NgbTooltipModule, ToastrModule.forRoot(), KeyboardShortcutsModule.forRoot(), MatMenuModule, NgbModalModule, NgbTypeaheadModule),
        provideAnimationsAsync(),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
