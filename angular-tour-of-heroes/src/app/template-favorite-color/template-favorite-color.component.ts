import { Component, OnInit } from '@angular/core';


//模板驅動表單用指令建立
@Component({
  selector: 'app-template-favorite-color',
  templateUrl: './template-favorite-color.component.html',
  styleUrls: ['./template-favorite-color.component.css']
})
export class TemplateFavoriteColorComponent implements OnInit {

  constructor() { }

  favoriteColor = '';

  ngOnInit() {
  }



}
