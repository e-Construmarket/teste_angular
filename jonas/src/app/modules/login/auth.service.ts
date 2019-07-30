import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isValid = false;

  login(user: User) {


    if (user.email === 'teste-angular@teste.com' && user.password === 'teste') {
      //TODO
      //SALVAR SESSÃO LOCAL STORAGE
      this.isValid = true;
    }
  
    else {
      this.isValid = false;

    }

  }

}
