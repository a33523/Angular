import { AfterViewInit, ViewChild } from '@angular/core';
import { Component }                from '@angular/core';
import { DashboardComponent }  from './dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  @ViewChild(DashboardComponent)
  private timerComponent: DashboardComponent;

  seconds() {  this.timerComponent.start1(); }


   ngAfterViewInit() {
    // Redefine `seconds()` to get from the `DashboardComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
     setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);

  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

  }



