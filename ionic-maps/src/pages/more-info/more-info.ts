import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more-info',
  templateUrl: 'more-info.html',
})

export class MoreInfoPage {

  wikiDummyData: any[] = [
      "pizza",
      [
          "Pizza"
      ],
      [
          "Pizza is a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments."
      ],
      [
          "https://en.wikipedia.org/wiki/Pizza"
      ]
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreInfoPage');
  }

}


