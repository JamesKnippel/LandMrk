import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Blurb } from '../../models/blurb.interface'

declare var google;

@Component({
  selector: 'page-mapping',
  templateUrl: 'mapping.html'
})
export class MappingPage {
  
  Blurb = {} as Blurb;
  blurbTextRef$: FirebaseListObservable<Blurb[]>
  
  @ViewChild('map') mapElement: ElementRef;
  wasClicked: boolean = false;
  map: any;
  marker: any;
  processing: boolean;
  position: any;
  interval: any;
  alert: any;
  content: any;
  longitude: number;
  latitude: number;
  wikiState: string;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,
    private alertCtrl: AlertController, private database: AngularFireDatabase, public navParams: NavParams) {
    this.blurbTextRef$ = this.database.list('marker-list')
  }

  createMarker() {

    var destination = new google.maps.Marker({

      map: this.map,
      position: this.position,
      title: 'Hello',
      label: 'M',

    })

    this.alert = this.alertCtrl.create({
      title: 'Create a Fact',
      inputs: [
        {
          name: 'title',
          placeholder: 'Please enter title'
        },
        {
          name: 'fact',
          placeholder: 'Please enter description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => { console.log('Cancel clicked'); }
        },
        {
          text: 'Confirm',
          handler: (data) => {

            //content variable used for storing data into the DB
            this.content = data;
            console.log(data);
            google.maps.event.addListener(destination, 'click', ((marker, content) => {

              return () => {
                let blurb = new google.maps.InfoWindow()
                blurb.setContent(content);
                blurb.open(this.map, marker);
              }

            })(destination, this.content));

            // after a marker is placed, push to DB
            this.blurbTextRef$.push({
              latitude: this.latitude,
              longitude: this.longitude,
              title: this.content.title,
              text: this.content.fact
            })
            this.Blurb = {} as Blurb;
          }
        }
      ]
    });

    this.alert.present();

  }



  ionViewWillEnter() {
    this.loadMap();
    this.interval = setInterval(this.updatePos.bind(this), 2000);
  }

  ionViewWillLeave() {
    console.log('leaving page, ending position get')
    clearInterval(this.interval);
  }

  updatePos() {

    if (this.processing) {
      return;
    }

    this.processing = true;

    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((pos) => {

      this.processing = false;

      console.log('getting new position');

      this.marker.setMap(null);
      this.longitude = pos.coords.longitude;
      this.latitude = pos.coords.latitude;
      this.position = new google.maps.LatLng(this.latitude, this.longitude);

      this.marker = new google.maps.Marker({
        map: this.map,
        icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
          new google.maps.Size(22, 22),
          new google.maps.Point(0, 18),
          new google.maps.Point(11, 11)),
        position: this.position
      });
      // this.map.panTo(this.position);
    })
  }

  loadMap() {

    this.processing = true;

    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((pos) => {

      this.processing = false;

      console.log('initialize map');

      this.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      let mapOptions = {
        center: this.position,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      this.marker = new google.maps.Marker({
        map: this.map,
      //   icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
      //     new google.maps.Size(22, 22),
      //     new google.maps.Point(0, 18),
      //     new google.maps.Point(11, 11)),
        position: this.position
      });

      this.populateMap();

      this.map.panTo(this.position);
    })
    .catch((err)=>{
      console.log('this is the error', err)
    })

  }
  
  toggleMoreInfo() {
    this.wasClicked = !this.wasClicked;
    console.log('wasClicked: ', this.wasClicked);
  }
  
  updateWikiTopic(wikiTopic: string) {
    this.wikiState = wikiTopic;
  }
  
  navigateToMoreInfoPage() {
    console.log('the wikiState being pushed is ', this.wikiState )
    this.navCtrl.push('MoreInfoPage', { wikiTopic: this.wikiState });
    
  }
  
  populateMap() {
    
    this.blurbTextRef$.subscribe( item => {
      for (let i in item) {
        let newPos = new google.maps.LatLng(item[i].latitude, item[i].longitude);
        var destination = new google.maps.Marker({
          map: this.map,
          position: newPos,
          title: 'Hello',
          label: 'M',
        })
        
        google.maps.event.addListener(destination, 'click', ((marker, content) => {
          
          return () => {
            this.updateWikiTopic(item[i].title);
            console.log(this.wikiState);
            console.log('marker was clicked!');
            this.toggleMoreInfo();
            let blurb = new google.maps.InfoWindow()
            blurb.setContent(content);
            blurb.open(this.map, marker);
          }

        })(destination, `${item[i].title}: ${item[i].text}`));
      }

    });
  }

}
