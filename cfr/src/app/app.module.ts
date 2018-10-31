import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicComponentDirective } from './dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    DynamicComponentDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //進入元件口
  entryComponents: [
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent
  ],
  providers: [DynamicComponentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
