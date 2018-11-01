import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  }


  //追蹤一組FormControl的值與有效性狀態，假若組中的任一控件無效，那這整組就無效。
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),

    //多一個FormGroup的子控件
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });


  onSubmit() {
    // TODO: Use EventEmitter with form value
    //向web控制台輸出一條警告訊息，其中每個對象會以字串的型式按照順序輸出到控制台。
    console.warn(this.profileForm.value);
  }

}
