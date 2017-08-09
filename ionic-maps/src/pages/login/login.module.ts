import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisterPage } from '../../pages/register/register'
import { AngularFireAuth } from 'angularfire2/auth'

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AngularFireAuth
  ],
})
export class LoginPageModule {}
