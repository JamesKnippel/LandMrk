import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular'




@Component({
  selector: 'page-ar-view',
  templateUrl: 'ar-view.html',
})
export class ArViewPage {
  wikitudePlugin: any;

  requiredFeatures = [ "2d_tracking", "geo" ];

  startupConfigurations = {
    "camera_position": "back"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    platform.ready().then(() => {
    this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
    this.wikitudePlugin._sdkKey = "YdiPVLg3SmKwC+5hnnIBoJQQS67YCi7H1hM8h0rvkvUBszYIqHrLSZE1UNu/NoHhQgZIThlVw4idRqafV3I74g7zMw+UCj85MM4AeZ1MYhMKF/SlV2h3fggV29pTaXiki1fPUh+XXjDTaV2HLLPybap+pF4hB+kz3JxW9VFiSgxTYWx0ZWRfXy347Oh+hvnfg1ub73FTVvnN3/R6HwUtYUSwnMcZLoYpRmPhoTg7hWGtgeNV/ppgOBVHg3RmqFdpxZc/4PJCNeQPPGq6oaVYTL2N6vmmEdhqAbbvp5y/n4mCA2a/us7U3iTVtJ+DSra5MJKbxKYlxWKCRbQ+YCsp9q6bM6u/nWyRm7NaebSUIc32o/e9S2viIsBiYg4Wya+QIKwd+NpJrYUkxQW/03wnf+oJo4iYbYJHe7rUc2f3C56vz5bQoMLc1yeYToIvs3YXml0uO1aouX/EPXBpOHDgyyfo/9IuOJC4HJuRWGiOTV1PA+89m+n4l3jzj+0uOuu1pvrftLZBsrmicfDpxFUiFk6uLWPSfOkxShuqn7gLYyJ85ioRkksuyQVeioDfZntlLejiczczuLttZkmMCk8acNut6L8xyPyRQfJUD9sP397fY4UfoYni2Gz1/TowmphU+489+hE3bYyidkJXnDK0TpVVY3as6jZk69mK/Ko4i8w=";
    this.wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, this.requiredFeatures);
      // console.log('The wikitude object: ', this.wikitudePlugin);
      // console.log('The wikitude test method: ',this.wikitudePlugin.isDeviceSupported);
    });
  }
 

  onDeviceSupported() {
    console.log('device supported');
  }

  onDeviceNotSupported() {
    console.log('device not supported');
  }

}
