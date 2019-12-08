import { Injectable } from '@angular/core';
import { IUser} from './user.model'

@Injectable()
export class AuthService {
  currentUser: IUser
  
  loginUser(username: string, password: string) {
   this.currentUser =  <IUser>{
      username : 'Admin',
      password : 'admin'
    }
  }
}
