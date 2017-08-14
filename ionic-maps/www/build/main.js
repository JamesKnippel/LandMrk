webpackJsonp([3],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(toast, afAuth, navCtrl) {
        this.toast = toast;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.account = {};
    }
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)];
                    case 1:
                        result = _a.sent();
                        this.toast.create({
                            message: 'Account successfully created!',
                            duration: 3000
                        }).present();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.toast.create({
                            message: e_1.message,
                            duration: 3000
                        }).present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Email Address</ion-label>\n        <ion-input [(ngModel)]="account.email" type="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="account.password" type="password"></ion-input>\n      </ion-item>\n    </ion-card-content>\n      <ion-row>\n        <div>\n          <button ion-button (click)="register()" color="primary">Register</button>\n        </div>\n      </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/register/register.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		416,
		2
	],
	"../pages/more-info/more-info.module": [
		417,
		0
	],
	"../pages/register/register.module": [
		415,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 192;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ar_view_ar_view__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapping_mapping__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Added for testing purposes
//import { MoreInfoPage } from '../more-info/more-info'

//Import Firebase, make sure to add /database with Observable too

var HomePage = (function () {
    function HomePage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        //setting up our observable to link with the AngularFireDatabase
        this.blurbTextRef$ = this.database.list('marker-entry');
    }
    HomePage.prototype.navigateToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mapping_mapping__["a" /* MappingPage */]);
    };
    HomePage.prototype.navigateToAr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ar_view_ar_view__["a" /* ArViewPage */]);
    };
    //button added for testing purposes
    HomePage.prototype.navigateToMoreInfo = function () {
        this.navCtrl.push('MoreInfoPage');
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n<script src=\'../home/firebaseData.js\'></Script>\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="nav-buttons">\n  <button ion-button (click)="navigateToAr()">AR View</button>\n  <button text-center ion-button (click)="navigateToMap()">View Markers</button>\n  <!-- Add nav link to more info page for testing purpose. will remove later -->\n  <!-- <button ion-button (click)="navigateToMoreInfo()">More Info</button> -->\n</div>\n<button ion-button (click)="logout()" class="logout-button">Logout</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArViewPage = (function () {
    function ArViewPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.arExperienceUrl = "www/assets/06_PointOfInterest_3_MultiplePois/index.html";
        this.requiredFeatures = ["2d_tracking", "geo"];
        this.startupConfiguration = {
            "camera_position": "back"
        };
        this.onDeviceSupported = function () {
            console.log('device supported');
            _this.wikitudePlugin.loadARchitectWorld(_this.onARExperienceLoadedSuccessful, _this.onARExperienceLoadError, _this.arExperienceUrl, _this.requiredFeatures, _this.startupConfiguration);
        };
        platform.ready().then(function () {
            _this.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
            _this.wikitudePlugin._sdkKey = "YdiPVLg3SmKwC+5hnnIBoJQQS67YCi7H1hM8h0rvkvUBszYIqHrLSZE1UNu/NoHhQgZIThlVw4idRqafV3I74g7zMw+UCj85MM4AeZ1MYhMKF/SlV2h3fggV29pTaXiki1fPUh+XXjDTaV2HLLPybap+pF4hB+kz3JxW9VFiSgxTYWx0ZWRfXy347Oh+hvnfg1ub73FTVvnN3/R6HwUtYUSwnMcZLoYpRmPhoTg7hWGtgeNV/ppgOBVHg3RmqFdpxZc/4PJCNeQPPGq6oaVYTL2N6vmmEdhqAbbvp5y/n4mCA2a/us7U3iTVtJ+DSra5MJKbxKYlxWKCRbQ+YCsp9q6bM6u/nWyRm7NaebSUIc32o/e9S2viIsBiYg4Wya+QIKwd+NpJrYUkxQW/03wnf+oJo4iYbYJHe7rUc2f3C56vz5bQoMLc1yeYToIvs3YXml0uO1aouX/EPXBpOHDgyyfo/9IuOJC4HJuRWGiOTV1PA+89m+n4l3jzj+0uOuu1pvrftLZBsrmicfDpxFUiFk6uLWPSfOkxShuqn7gLYyJ85ioRkksuyQVeioDfZntlLejiczczuLttZkmMCk8acNut6L8xyPyRQfJUD9sP397fY4UfoYni2Gz1/TowmphU+489+hE3bYyidkJXnDK0TpVVY3as6jZk69mK/Ko4i8w=";
            _this.wikitudePlugin.isDeviceSupported(_this.onDeviceSupported, _this.onDeviceNotSupported, _this.requiredFeatures);
            // console.log('The wikitude object: ', this.wikitudePlugin);
            // console.log('The wikitude test method: ',this.wikitudePlugin.isDeviceSupported);
        });
    }
    ArViewPage.prototype.onDeviceNotSupported = function () {
        console.log('device not supported');
    };
    ArViewPage.prototype.onARExperienceLoadError = function (err) {
        console.log('error load', err);
    };
    ArViewPage.prototype.onARExperienceLoadedSuccessful = function () {
        console.log('good load');
    };
    return ArViewPage;
}());
ArViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ar-view',template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/ar-view/ar-view.html"*/'<!--\n  Generated template for the ArViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>ar-view</ion-title>\n   <!-- <ion-navbar>\n    <ion-title>More Info</ion-title>\n     -->\n   </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/ar-view/ar-view.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], ArViewPage);

//# sourceMappingURL=ar-view.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MappingPage = (function () {
    function MappingPage(navCtrl, geolocation, alertCtrl, database, navParams) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.navParams = navParams;
        this.Blurb = {};
        this.wasClicked = false;
        this.blurbTextRef$ = this.database.list('marker-list');
    }
    MappingPage.prototype.createMarker = function () {
        var _this = this;
        var destination = new google.maps.Marker({
            map: this.map,
            position: this.position,
            title: 'Hello',
            label: 'M',
        });
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
                    handler: function () { console.log('Cancel clicked'); }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        //content variable used for storing data into the DB
                        _this.content = data;
                        console.log(data);
                        google.maps.event.addListener(destination, 'click', (function (marker, content) {
                            return function () {
                                var blurb = new google.maps.InfoWindow();
                                blurb.setContent(content);
                                blurb.open(_this.map, marker);
                            };
                        })(destination, _this.content));
                        // after a marker is placed, push to DB
                        _this.blurbTextRef$.push({
                            latitude: _this.latitude,
                            longitude: _this.longitude,
                            title: _this.content.title,
                            text: _this.content.fact
                        });
                        _this.Blurb = {};
                    }
                }
            ]
        });
        this.alert.present();
    };
    MappingPage.prototype.ionViewWillEnter = function () {
        this.loadMap();
        this.interval = setInterval(this.updatePos.bind(this), 2000);
    };
    MappingPage.prototype.ionViewWillLeave = function () {
        console.log('leaving page, ending position get');
        clearInterval(this.interval);
    };
    MappingPage.prototype.updatePos = function () {
        var _this = this;
        if (this.processing) {
            return;
        }
        this.processing = true;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (pos) {
            _this.processing = false;
            console.log('getting new position');
            _this.marker.setMap(null);
            _this.longitude = pos.coords.longitude;
            _this.latitude = pos.coords.latitude;
            _this.position = new google.maps.LatLng(_this.latitude, _this.longitude);
            _this.marker = new google.maps.Marker({
                map: _this.map,
                icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png', new google.maps.Size(22, 22), new google.maps.Point(0, 18), new google.maps.Point(11, 11)),
                position: _this.position
            });
            // this.map.panTo(this.position);
        });
    };
    MappingPage.prototype.loadMap = function () {
        var _this = this;
        this.processing = true;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (pos) {
            _this.processing = false;
            console.log('initialize map');
            _this.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
            var mapOptions = {
                center: _this.position,
                zoom: 20,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.marker = new google.maps.Marker({
                map: _this.map,
                //   icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                //     new google.maps.Size(22, 22),
                //     new google.maps.Point(0, 18),
                //     new google.maps.Point(11, 11)),
                position: _this.position
            });
            _this.populateMap();
            _this.map.panTo(_this.position);
        })
            .catch(function (err) {
            console.log('this is the error', err);
        });
    };
    MappingPage.prototype.toggleMoreInfo = function () {
        this.wasClicked = !this.wasClicked;
        console.log('wasClicked: ', this.wasClicked);
    };
    MappingPage.prototype.updateWikiTopic = function (wikiTopic) {
        this.wikiState = wikiTopic;
        console.log('updated to ', this.wikiState);
    };
    MappingPage.prototype.navigateToMoreInfoPage = function () {
        console.log('the wikiState being pushed is ', this.wikiState);
        this.navCtrl.push('MoreInfoPage', { wikiTopic: this.wikiState });
    };
    MappingPage.prototype.populateMap = function () {
        var _this = this;
        this.blurbTextRef$.subscribe(function (item) {
            for (var i in item) {
                var newPos = new google.maps.LatLng(item[i].latitude, item[i].longitude);
                var destination = new google.maps.Marker({
                    map: _this.map,
                    position: newPos,
                    title: 'Hello',
                    label: 'M',
                });
                google.maps.event.addListener(destination, 'click', (function (marker, content) {
                    return function () {
                        _this.updateWikiTopic(item[i].title);
                        console.log(_this.wikiState);
                        console.log('marker was clicked!');
                        _this.toggleMoreInfo();
                        var blurb = new google.maps.InfoWindow();
                        blurb.setContent(content);
                        blurb.open(_this.map, marker);
                    };
                })(destination, item[i].title + ": " + item[i].text));
            }
        });
    };
    return MappingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MappingPage.prototype, "mapElement", void 0);
MappingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mapping',template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/mapping/mapping.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="createMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map id="map"></div>\n  <div id="more-info-button">\n    <button ion-button class="animated slideInUp" *ngIf="wasClicked" (click)="navigateToMoreInfoPage()">Click for more info!</button>\n  </div>  \n  </ion-content>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/mapping/mapping.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MappingPage);

//# sourceMappingURL=mapping.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WikiServiceProvider = (function () {
    function WikiServiceProvider(http) {
        this.http = http;
        this.baseUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
        this.queryString = "&limit=1&format=json&callback=?";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        console.log('Hello WikiServiceProvider Provider');
    }
    WikiServiceProvider.prototype.getWiki = function (wikiTopic) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('origin', '*');
        this.options.search = params;
        console.log('Yo, the get was called!');
        //https://en.wikipedia.org/w/api.php?action=opensearch&search=${wikiTopic}&limit=1&format=json`
        // `${this.baseUrl}${wikiTopic}${this.queryString}`
        return this.http.get("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikiTopic + "&limit=1&format=json", this.options)
            .do(function (data) { return console.log(data); })
            .map(function (data) { return data.json(); })
            .do(function (data) { return console.log(data); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server error."); });
    };
    return WikiServiceProvider;
}());
WikiServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], WikiServiceProvider);

//# sourceMappingURL=wiki.service.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ar_view_ar_view__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapping_mapping__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__firebase_credentials__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_wiki_service_wiki_service__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_ar_view_ar_view__["a" /* ArViewPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mapping_mapping__["a" /* MappingPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            //HttpClientModule,
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more-info/more-info.module#MoreInfoPageModule', name: 'MoreInfoPage', segment: 'more-info', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_ar_view_ar_view__["a" /* ArViewPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mapping_mapping__["a" /* MappingPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_wiki_service_wiki_service__["a" /* WikiServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, geolocation) {
        // rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            statusBar.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyCph-CQE_pkzfL4tNsIZHKfi9aKR0MyaIw",
    authDomain: "landmrk-f898c.firebaseapp.com",
    databaseURL: "https://landmrk-f898c.firebaseio.com",
    projectId: "landmrk-f898c",
    storageBucket: "",
    messagingSenderId: "1056602854795"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.account = {};
    }
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)];
                    case 1:
                        result = _a.sent();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.navigateToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <img src="assets/imgs/logo.png" alt="logo"/>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Email Address</ion-label>\n        <ion-input [(ngModel)]="account.email" type="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="account.password" type="password"></ion-input>\n      </ion-item>\n    </ion-card-content>\n      <ion-row>\n        <div>\n          <button ion-button (click)="navigateToRegister()" color="secondary">Register</button>\n          <button ion-button (click)="login()">Login</button>\n        </div>\n      </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map