import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-mapping',
  templateUrl: 'mapping.html'
})
export class MappingPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  processing: boolean;
  position: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  createMarker() {

    var destination = new google.maps.Marker({

      map: this.map,
      position: this.position,
      title: 'Hello',
      label: 'M',

    })

    google.maps.event.addListener(destination, 'click', ((marker, content) => {
      return () => {
        let blurb = new google.maps.InfoWindow()
        blurb.setContent(content);
        blurb.open(this.map, marker);
      }

    })(destination, 'hello have you changed?'));

  }

  ionViewDidLoad() {
    this.loadMap();
    setInterval(this.updatePos.bind(this), 20000);
  }

  updatePos() {

    if (this.processing) {
      return;
    }

    this.processing = true;

    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((pos) => {

      console.log(pos);

      this.processing = false;

      console.log('getting new position');

      this.marker.setMap(null);   

      this.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      this.marker = new google.maps.Marker({
        map: this.map,
        // icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
        //   new google.maps.Size(22, 22),
        //   new google.maps.Point(0, 18),
        //   new google.maps.Point(11, 11)),
        position: this.position
      });
      this.map.panTo(this.position);
    })
  }

  loadMap() {
    
    this.processing = true;

    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((pos) => {

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
        // icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
        //   new google.maps.Size(22, 22),
        //   new google.maps.Point(0, 18),
        //   new google.maps.Point(11, 11)),
        position: this.position
      });

    })
    .catch((err) => console.log(err));
  }
  
}
