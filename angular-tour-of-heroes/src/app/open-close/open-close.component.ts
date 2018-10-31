import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [

    // animation triggers go here
    trigger('openClose', [
      state('open', style({
        height: '150px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),

      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),

      transition('open => closed', [
        animate('1000s')
      ]),

      transition('closed => open', [
        animate('0.5s')
      ])

    ])
  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen = true;


  toggle() {
    this.isOpen != this.isOpen;
  }


}
