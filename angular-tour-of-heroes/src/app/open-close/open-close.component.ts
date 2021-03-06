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

      // transition('open => closed', [
      //   animate('0.2s 2s')
      // ]),

      transition('* => *', [
        animate('1s')
      ])

    ]),
  ]
})
export class OpenCloseComponent implements OnInit {


  isOpen = false;
  constructor() { }

  ngOnInit() {


  }


  toggle() {
    this.isOpen = !this.isOpen;
    return console.log(this.isOpen);
  }


}
