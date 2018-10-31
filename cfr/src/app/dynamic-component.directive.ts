import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {


  //ViewContainerRef可以讓我們得知目前所在的HTML元素中包含的View內容，也可以透過它來改變View的結果
  constructor(public viewContainerRef: ViewContainerRef) { }

  //ViewContainerRef，表示可以將一個或多個視圖附加到組件的"容器"


}
