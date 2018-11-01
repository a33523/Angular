import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,FormArray  } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {


  //FormBuilder 是一個服務元件，讓表單有自動生成的效果。
  constructor(private ab: FormBuilder) { }

  ngOnInit() {
  }


  //追蹤一組FormControl的值與有效性狀態，假若組中的任一控件無效，那這整組就無效。
  profileForm = this.ab.group({
    //用到Validators方法裡的required驗證器要求此控件具有非空值。
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.ab.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    //FormArray會聚合數組中每個表單控件的值，最後回傳一個子控件構成的陣列。
    aliases: this.ab.array([
      this.ab.control('')
    ])
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
        street: '123 Drew     Street'
      }
    });
  }

  get aliases() {
    //get 會指定控件的名稱或路徑來取得值。
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    //會在數組最後加上一個新的control
    this.aliases.push(this.ab.control(''));
  }

}
