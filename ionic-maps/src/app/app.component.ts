
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home'
import { Geolocation } from '@ionic-native/geolocation';
import { LoginPage } from '../pages/login/login'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // rootPage:any = HomePage;
  rootPage:any = LoginPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, geolocation: Geolocation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.hide() 
      
      
      geolocation.getCurrentPosition().then((location) => {
        console.log(location); 
      }).catch((error) => {
        console.log('GEOLOCATION ERROR IN APP COMPONENT', error); 
      });

    });
  }
}

