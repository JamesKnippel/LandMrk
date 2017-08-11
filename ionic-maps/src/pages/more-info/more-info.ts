import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WikiServiceProvider } from '../../providers/wiki-service/wiki.service';
import { Wiki } from '../../models/wiki.interface';

@IonicPage()
@Component({
  selector: 'page-more-info',
  templateUrl: 'more-info.html',
})

export class MoreInfoPage {

  wikiTopic: string;

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

  
  constructor(private wiki: WikiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  getWikiInformation():void {
    //TODO: Change data type to conform to wiki model interface
    //TODO: Add wiki url that opens wikipedia in the browser
    this.wiki.getWiki('landmark').subscribe((data: Wiki) => {
      this.wikiDummyData[1][0] = data[1][0];
      this.wikiDummyData[2][0] = data[2][0];
    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreInfoPage');
    
    // Use this.nabParams to pass through wikiTopic from the AR view page

    if(this.wikiTopic) {
    }
      this.getWikiInformation();
    
  }
}