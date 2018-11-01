import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //FromControl管理單體表單控件的值和有效性狀態
  name = new FormControl('blus');

  updateName() {
    //setValue設定表單控件的新值
    this.name.setValue('Nancy');
  }

}
