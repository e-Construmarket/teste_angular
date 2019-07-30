import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from "@angular/forms";
import { User } from './user.model';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loadForm();
  }
  submit(){
    const user: User = Object.assign(new User(), this.form.value);
    this.authService.login(user);
    if(this.authService.isValid){
      alert('ok');
    }
    else{
      alert('Não autorizado.');
    }
  }
  private loadForm(){
    this.form = this.formBuilder.group({email: [null], password: [null]});
  }
}
