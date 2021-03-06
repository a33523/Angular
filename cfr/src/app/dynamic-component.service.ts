import { Injectable } from '@angular/core';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentAComponent } from './component-a/component-a.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  private components = {
    componentA: ComponentAComponent,
    componentB: ComponentBComponent,
    componentC: ComponentCComponent
  }
  constructor() { }
  getComponent(componentName) {
    return this.components[componentName];
  }

}
