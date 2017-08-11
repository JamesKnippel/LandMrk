import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'
import { ArViewPage }  from '../pages/ar-view/ar-view';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MappingPage } from '../pages/mapping/mapping';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials'
import { Geolocation } from '@ionic-native/geolocation';
import { WikiServiceProvider } from '../providers/wiki-service/wiki.service';

@NgModule({
  declarations: [
    MyApp,
    ArViewPage,
    LoginPage,
    RegisterPage,
    HomePage,
    MappingPage
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArViewPage,
    LoginPage,
    RegisterPage,
    HomePage,
    MappingPage,
    //HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WikiServiceProvider
  ]
})
export class AppModule {}
