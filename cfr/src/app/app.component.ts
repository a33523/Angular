import { DynamicComponentService } from './dynamic-component.service';

import { DynamicComponentDirective } from './dynamic-component.directive';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cfr';

  //使用ViewChild取得要動態放置Component的directive，componentHost 就是容器
  @ViewChild(DynamicComponentDirective) componentHost: DynamicComponentDirective;



  selectedComponentName: string;

  constructor(private dynamicComponentService: DynamicComponentService,

    private componentFactoryResolver: ComponentFactoryResolver) {

  }

  displayComponent(componentName: string) {
    //componentFactory 會從服務裡取得進入元件的名稱
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.dynamicComponentService.getComponent(componentName));

    const viewContainerRef = this.componentHost.viewContainerRef;
    //透過componentHost的ViewContainerRef，將內容先清空
    viewContainerRef.clear();

    //產生我們需要的Component並放入componentHost之中
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
