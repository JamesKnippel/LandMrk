webpackJsonp([0],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoPageModule", function() { return MoreInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_info__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoreInfoPageModule = (function () {
    function MoreInfoPageModule() {
    }
    return MoreInfoPageModule;
}());
MoreInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__more_info__["a" /* MoreInfoPage */]),
        ],
    })
], MoreInfoPageModule);

//# sourceMappingURL=more-info.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wiki_service_wiki_service__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoreInfoPage = (function () {
    function MoreInfoPage(wiki, navCtrl, navParams) {
        this.wiki = wiki;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wikiDummyData = [
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
    }
    MoreInfoPage.prototype.getWikiInformation = function (wikiTopic) {
        var _this = this;
        //TODO: Change data type to conform to wiki model interface
        //TODO: Add wiki url that opens wikipedia in the browser
        this.wiki.getWiki(wikiTopic).subscribe(function (data) {
            _this.wikiDummyData[1][0] = data[1][0];
            _this.wikiDummyData[2][0] = data[2][0];
        });
    };
    MoreInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoreInfoPage');
        console.log('The wikiTopic is: ', this.navParams.get('wikiTopic'));
        // Use this.nabParams to pass through wikiTopic from the AR view page
        this.getWikiInformation(this.navParams.get('wikiTopic'));
    };
    return MoreInfoPage;
}());
MoreInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more-info',template:/*ion-inline-start:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/more-info/more-info.html"*/'<!--\n  Generated template for the MoreInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>More Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h3>{{wikiDummyData[1][0]}}</h3>\n\n    <p>{{wikiDummyData[2][0]}}</p>\n    <button ion-button>Read the Wikipedia Article</button>\n     <!-- Add to button and download apache corodovas InAppBrowser to launch wiki\n    src={{wikiDummyData[3][0]}}  -->\n</ion-content>\n'/*ion-inline-end:"/Users/jamesknippel/hackReactor/Projects/LandMrk/ionic-maps/src/pages/more-info/more-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_wiki_service_wiki_service__["a" /* WikiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MoreInfoPage);

//# sourceMappingURL=more-info.js.map

/***/ })

});
//# sourceMappingURL=0.js.map