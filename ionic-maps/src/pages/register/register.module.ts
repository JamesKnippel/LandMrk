import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    AngularFireAuth
  ],
})
export class RegisterPageModule {}
