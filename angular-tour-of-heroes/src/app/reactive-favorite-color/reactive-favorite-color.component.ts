import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


//響應式表單用class來建立
@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './reactive-favorite-color.component.html',
  styleUrls: ['./reactive-favorite-color.component.css']
})


export class ReactiveFavoriteColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   favoriteColorControl = 123;//new FormControl('blus');

}
