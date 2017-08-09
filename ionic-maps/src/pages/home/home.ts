import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArViewPage } from '../ar-view/ar-view'
import { MappingPage } from '../mapping/mapping';
import { LoginPage } from '../login/login';

//Import Firebase, make sure to add /database with Observable too
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database'
import { Blurb } from '../../models/blurb.interface'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  blurbTextRef$: FirebaseListObservable<Blurb[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase) {
    //setting up our observable to link with the AngularFireDatabase
    this.blurbTextRef$ = this.database.list('marker-entry');
  }

  navigateToMap() {
    this.navCtrl.push(MappingPage)
  }
  navigateToAr(){
    this.navCtrl.push(ArViewPage)
  }
  
  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
  
}
