import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputControlComponent } from './controls/input-control/input-control.component';
import { DemoInputComponent } from './implement-controls/demo-input/demo-input.component';
import { SelectControlComponent } from './controls/select-control/select-control.component';
import { DemoSelectComponent } from './implement-controls/demo-select/demo-select.component';

@NgModule({
  declarations: [
    AppComponent,
    InputControlComponent,
    DemoInputComponent,
    SelectControlComponent,
    DemoSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
