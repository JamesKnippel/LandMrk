import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform} from 'ionic-angular'




@Component({
  selector: 'page-ar-view',
  templateUrl: 'ar-view.html',
})
export class ArViewPage {
  wikitudePlugin: any;
  requiredFeatures = ["2d_tracking", "geo"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
     platform.ready().then(() => {
      this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");

      console.log('The wikitude object: ', this.wikitudePlugin);
      console.log('The wikitude test method: ',this.wikitudePlugin.isDeviceSupported);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArViewPage');
  }

  ionViewDidEnter(){

  }

}
