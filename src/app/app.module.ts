import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OffcanvasPopupComponent } from './offcanvas-popup/offcanvas-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    OffcanvasPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
