import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {


  //FormBuilder 是一個服務元件，
  //讓使用者自行創件表單而非初始就建立，簡化建構程式的樣板量。
  constructor(private ab: FormBuilder) { }

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

  updateProfile() {
    //patchValue 可以用對像中所定義的任何屬性為表單模型進行替換修正。
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}
