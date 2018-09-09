import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputControlComponent } from './controls/input-control/input-control.component';
import { DemoInputComponent } from './implement-controls/demo-input/demo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputControlComponent,
    DemoInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
