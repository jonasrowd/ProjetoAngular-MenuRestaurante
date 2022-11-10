(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n        <h3>About Us</h3>\n        <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"70\" fxFlexOffset=\"20px\">\n        <h2>Our History</h2>\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n      </div>\n      <div fxFlex=\"30\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>\n            <h2>Facts At a Glance</h2>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <dl>\n              <dt>Started</dt>\n              <dd>3 Feb. 2013</dd>\n              <dt>Major Stake Holder</dt>\n              <dd>HK Fine Foods Inc.</dd>\n              <dt>Last Year's Turnover</dt>\n              <dd>$1,250,375</dd>\n              <dt>Employees</dt>\n              <dd>40</dd>\n            </dl>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <mat-card>\n      <blockquote>\n        <h3>You better cut the pizza in four pieces because\n            I'm not hungry enough to eat six.</h3>\n        <footer>-- Yogi Berra,\n          <cite>The Wit and Wisdom of Yogi Berra,\n            P. Pepe, Diversion Books, 2014</cite>\n        </footer>\n      </blockquote>\n    </mat-card>\n  </div>\n\n  <div fxFlex *ngIf=\"leader\">\n    <mat-list>\n      <mat-card-header>\n        <mat-card-title>\n          <h1>Corporate Leadership</h1>\n        </mat-card-title>\n      </mat-card-header>\n      <mat-list-item *ngFor=\"let row of leader\">\n        <img matListAvatar src=\"../../assets/images/alberto.png\" alt=\"Muppala\">\n        <h3 matLine> {{row.name}} {{row.abbr}}</h3>\n        <p matLine> {{row.designation}} </p>\n        <p matLine> {{row.description}} </p>\n      </mat-list-item>\n    </mat-list>\n  </div>\n\n  <div [hidden]=\"leader\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(leaderService) {
        this.leaderService = leaderService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderService.getLeaders()
            .subscribe(function (leader) { return _this.leader = leader; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_services_leader_service__WEBPACK_IMPORTED_MODULE_2__["LeaderService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animations/app.animation.ts":
/*!*********************************************!*\
  !*** ./src/app/animations/app.animation.ts ***!
  \*********************************************/
/*! exports provided: visibility, flyInOut, expand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function() { return visibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function() { return expand; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function visibility() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out'))
    ]);
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in')
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
        ])
    ]);
}
function expand() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-50%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'dishdetail/:id', component: _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_1__["DishdetailComponent"] },
    { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'conFusion';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/leader.service */ "./src/app/services/leader.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_button___WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button/ */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_27__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"],
                _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_13__["DishdetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_31__["HighlightDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material_button___WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"]
            ],
            providers: [
                _services_dish_service__WEBPACK_IMPORTED_MODULE_12__["DishService"],
                _services_promotion_service__WEBPACK_IMPORTED_MODULE_28__["PromotionService"],
                _services_leader_service__WEBPACK_IMPORTED_MODULE_18__["LeaderService"],
                _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_1__["ProcessHTTPMsgService"],
                _services_feedback_service__WEBPACK_IMPORTED_MODULE_0__["FeedbackService"],
                { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["BaseURL"] }
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n  fxLayout=\"column\"\n  fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Contact Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <h3>Location Information</h3> \n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n        <h4>Our Address</h4>\n        <address>\n          121, Clear Water Bay Road<br>\n          Clear Water Bay, Kowloon<br>\n          HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>: \n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n        <p></p>\n        <div>\n          <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n          <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n          <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n        </div>\n        </div>\n      <div fxFlex=\"40\">\n        <h4>Map of our Location</h4>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n    <h3>Send us your Feedback</h3>\n    \n    <form novalidate [formGroup]=\"feedbackForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"showForm\" [@expand]>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\n        </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n          <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n        </mat-form-field>\n      </p>\n        <table class=\"form-size\">\n          <td>\n            <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n          </td>\n          <td>\n            <mat-select placeholder=\"How?\" formControlName=\"contactType\">\n              <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n                {{ ctype }}\n              </mat-option>\n            </mat-select>\n          </td>\n        </table>\n      <p>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </mat-form-field>\n      </p>\n      <button type=\"submit\" [disabled]=\"feedbackForm.invalid\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n    </form>\n\n  </div>\n  <div [hidden]=\"showForm || submitted || errMess\" [@expand]>\n    <h3>Submitting Form</h3>\n    <mat-spinner></mat-spinner>\n  </div>\n  <div fxFlex *ngIf=\"errMess\">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n  <div *ngIf=\"submitted\" [@expand]>\n    <h3>Your Submission</h3>\n      <p>First Name: {{submitted.firstname}}</p>\n      <p>Last Name: {{submitted.lastname}}</p>\n      <p>Tel. Number: {{submitted.telnum}}</p>\n      <p>Email: {{submitted.email}}</p>\n      <p>Contact You?: {{submitted.agree}}</p>\n      <p>How?: {{submitted.contactType}}</p>\n      <p>Feedback: {{submitted.message}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%;\n}\n\n.half-width {\n  width: 45%;\n}\n\n.form-size {\n  width: 75%;\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/feedback.service */ "./src/app/services/feedback.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
/* harmony import */ var _shared_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/feedback */ "./src/app/shared/feedback.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, feedbackService) {
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.contactType = _shared_feedback__WEBPACK_IMPORTED_MODULE_4__["ContactType"];
        this.submitted = null;
        this.showForm = true;
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMessages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            },
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ContactComponent.prototype.createForm = function () {
        var _this = this;
        this.feedbackForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            telnum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            agree: false,
            contactType: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.showForm = false;
        this.feedbackService.submitFeedback(this.feedback)
            .subscribe(function (feedback) {
            _this.submitted = feedback;
            _this.feedback = null;
            // setTimeout(() => { this.submitted = null; this.showForm = true; }, 5000);
        }, function (errmess) { _this.feedback = null; _this.errMess = errmess; });
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'None',
            message: ''
        });
        this.feedbackFormDirective.resetForm();
    };
    ContactComponent.prototype.onValueChanged = function (data) {
        if (!this.feedbackForm) {
            return;
        }
        var form = this.feedbackForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "feedbackFormDirective", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_0__["FeedbackService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "onMouseLeave", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n    fxLayout=\"row wrap\"\r\n    fxLayout.sm=\"column\"\r\n    fxLayout.xs=\"column\"\r\n    fxLayoutAlign.gt-md=\"space-around center\"\r\n    fxLayoutGap=\"10px\" \r\n    fxLayoutGap.xs=\"0\">\r\n\r\n    <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]=\"expand\">\r\n      <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n            <h3>{{dish.name | uppercase}}</h3>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n        <img mat-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\r\n      <mat-card-content>\r\n        <p>{{dish.description}}\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-button [routerLink]=\"['/dishdetail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\r\n        <button mat-button (click)=\"goBack()\"><span class=\"fa fa-arrow-left fa-lg\"></span></button>\r\n        <button mat-button (click)=\"addToFavorites()\"><span class=\"{{favorite ? 'fa fa-heart fa-lg' : 'fa fa-heart-o fa-lg'}}\"></span></button>\r\n        <button mat-button><span class=\"fa fa-share fa-lg\"></span></button>\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-button [routerLink]=\"['/dishdetail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\">\r\n    <mat-list>\r\n      <h3>Comments</h3>\r\n      <mat-list-item *ngFor=\"let comment of dish.comments\">\r\n        <h4 matLine> {{comment.comment}} </h4>\r\n        <p matLine> {{comment.rating}} Stars</p>\r\n        <p matLine>\r\n          <span> -- {{comment.author}} {{comment.date | date }} </span>\r\n        </p>\r\n      </mat-list-item>\r\n      <mat-list-item *ngIf=\"commentForm.status === 'VALID'\">\r\n        <h4 matLine> {{ commentForm.value.comment }}</h4>\r\n        <p matLine > {{ commentForm.value.rating }} Stars</p>\r\n        <p matLine >-- {{ commentForm.value.author }} <!--{{ date | date }}--></p>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <form novalidate [formGroup]=\"commentForm\" #cform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n      <p>\r\n        <mat-form-field class=\"full-width\">\r\n          <input matInput formControlName=\"author\" placeholder=\"Name\" type=\"text\" required>\r\n          <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\r\n        </mat-form-field>\r\n        <span class=\"flex-spacer\"></span>\r\n      </p>\r\n        <table class=\"form-size\">\r\n          <td>\r\n            <mat-slider   thumbLabel\r\n            [displayWith]=\"formatLabel\"\r\n            tickInterval=\"5\"\r\n            step=\"1\"\r\n            min=\"1\"\r\n            max=\"5\"\r\n            aria-label=\"units\" formControlName=\"rating\"></mat-slider>\r\n          </td>\r\n        </table>\r\n      <p>\r\n        <mat-form-field class=\"full-width\">\r\n          <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=12 required></textarea>\r\n          <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\r\n\r\n        </mat-form-field>\r\n      </p>\r\n      <button type=\"submit\" [disabled]=\"!commentForm.valid\" mat-button class=\"background-primary text-floral-white\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 95%;\n}\n\n.half-width {\n  width: 45%;\n}\n\n.form-size {\n  width: 75%;\n}"

/***/ }),

/***/ "./src/app/dishdetail/dishdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dishdetail/dishdetail.component.ts ***!
  \****************************************************/
/*! exports provided: DishdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishdetailComponent", function() { return DishdetailComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DishdetailComponent = /** @class */ (function () {
    function DishdetailComponent(dishService, route, location, fb, BaseURL) {
        this.dishService = dishService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.visibility = "shown";
        this.favorite = false;
        this.formErrors = {
            'author': "",
            'comment': "",
        };
        this.validationMessages = {
            'author': {
                'required': "Name is required.",
                'minlength': "Name must be at least 2 characters long.",
                'maxlength': "Name cannot be more than 25 characters long.",
            },
            'comment': {
                'required': "Comment is required.",
            },
        };
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.dishService
            .getDishIds()
            .subscribe(function (dishIds) { return (_this.dishIds = dishIds); });
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { _this.visibility = 'hidden'; return _this.dishService.getDish(params["id"]); }))
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.dishcopy = dish;
            _this.setPrevNext(dish.id);
            _this.visibility = 'shown';
        }, function (errmess) { return _this.errMess = errmess; });
    };
    DishdetailComponent.prototype.createForm = function () {
        var _this = this;
        this.commentForm = this.fb.group({
            author: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25),
                ],
            ],
            rating: [5],
            comment: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.commentForm.valueChanges.subscribe(function (data) {
            return _this.onValueChanged(data);
        });
        this.onValueChanged(); // (re)set validation messages now
    };
    DishdetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.comment = this.commentForm.value;
        this.comment.date = new Date().toISOString();
        console.log(this.comment);
        this.dishcopy.comments.push(this.comment);
        this.dishService.putDish(this.dishcopy)
            .subscribe(function (dish) {
            _this.dish = dish;
            _this.dishcopy = dish;
        }, function (errmess) { _this.dish = null; _this.dishcopy = null; _this.errMess = errmess; });
        this.commentFormDirective.resetForm();
        this.commentForm.reset({
            author: "",
            rating: 5,
            message: "",
        });
    };
    DishdetailComponent.prototype.onValueChanged = function (data) {
        if (!this.commentForm) {
            return;
        }
        var form = this.commentForm;
        for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.formErrors[field] = "";
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + " ";
                        }
                    }
                }
            }
        }
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        this.prev =
            this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next =
            this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("cform"),
        __metadata("design:type", Object)
    ], DishdetailComponent.prototype, "commentFormDirective", void 0);
    DishdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dishdetail",
            template: __webpack_require__(/*! ./dishdetail.component.html */ "./src/app/dishdetail/dishdetail.component.html"),
            styles: [__webpack_require__(/*! ./dishdetail.component.scss */ "./src/app/dishdetail/dishdetail.component.scss")],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            // tslint:disable-next-line:use-host-property-decorator
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_6__["visibility"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_6__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_6__["expand"])()
            ]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])("BaseURL")),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_5__["DishService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], Object])
    ], DishdetailComponent);
    return DishdetailComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\" \n    fxLayout=\"row wrap\" \n    fxLayout.lt-md=\"column\" \n    fxLayoutAlign=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <mat-list>\n          <mat-list-item><a mat-button routerLink=\"/home\">Home</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink=\"/aboutus\">About</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink=\"/menu\">Menu</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink=\"/contactus\">Contact</a></mat-list-item>\n        </mat-list>\n      </div>\n      <div fxFlex=\"55\">\n        <h4>Our Address</h4>\n        <address style=\"text-size: 80%\">\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n    <div style=\"text-align:center\">\n      <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n    </div>\n  </div>\n  <div>\n      <p>© Copyright 2018 Ristorante Con Fusion</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px;\n}\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important;\n}\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important;\n}\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important;\n}\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important;\n}\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important;\n}\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a mat-button routerLink=\"/home\" routerLinkActive=\"Active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button routerLink=\"/aboutus\" routerLinkActive=\"Active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button routerLink=\"/menu\" routeLinkActive=\"Active\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a mat-button routerLink=\"/contactus\" routerLinkActive=\"Active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\n</mat-toolbar>\n\n\n<div class=\"container jumbotron\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\" \n    fxLayout.xs=\"column\" \n    fxLayoutAlign.xs=\"start center\"\n    fxLayoutAlign.sm=\"start center\" \n    fxLayoutAlign.gt-sm=\"center center\" \n    fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px;\n}\n\n.active {\n  background: #4527A0;\n}"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\"\n    fxLayout.xs=\"column\"\n    fxLayoutAlign.gt-md=\"space-around center\"\n    fxLayoutGap=\"10px\">\n\n  <mat-card *ngIf=\"dish\" fxFlex [@expand]=\"expand\">\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{dish.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{BaseURL + dish.image}}\" alt={{dish.name}}>\n    <mat-card-content>\n      <p>{{dish.description}}\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <div fxFlex [hidden]=\"dish || dishErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"dishErrMess\">\n    <h2>Error</h2>\n    <h4>{{ dishErrMess }}</h4>\n  </div>\n\n  <mat-card *ngIf=\"promotion\" fxFlex>\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{promotion.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{BaseURL + promotion.image}}\" alt={{promotion.name}}>\n    <mat-card-content>\n      <p>{{promotion.description}}\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <div fxFlex [hidden]=\"promotion || promotionErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"promotionErrMess\">\n    <h2>Error</h2>\n    <h4>{{ promotionErrMess }}</h4>\n  </div>\n\n  <mat-card *ngIf=\"leader\" fxFlex>\n    <mat-card-header>\n      <div mat-card-avatar></div>\n      <mat-card-title>\n        <h3>{{leader.name | uppercase}}</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"{{BaseURL + leader.image}}\" alt={{leader.image}}>\n    <mat-card-content>\n      <p>{{leader.description}}\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <div fxFlex [hidden]=\"leader || leaderErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"leaderErrMess\">\n    <h2>Error</h2>\n    <h4>{{ leaderErrMess }}</h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/promotion.service */ "./src/app/services/promotion.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dishservice, promotionservice, leaderService, BaseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderService = leaderService;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promotionErrMess = errmess; });
        this.leaderService.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["expand"])()
            ]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseURL')),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"],
            _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__["PromotionService"],
            _services_leader_service__WEBPACK_IMPORTED_MODULE_2__["LeaderService"], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  Login\n<span class=\"flex-spacer\"></span>\n<button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<p>{{ user | json }}</p>\n\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n    <p>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\" required>\n        <mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\" required>\n        <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n      </mat-form-field>\n      <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\n    </p>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n  </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialog, dialogRef) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    LoginComponent_1 = LoginComponent;
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log('User: ', this.user);
        this.dialogRef.close();
    };
    LoginComponent.prototype.openLoginForm = function () {
        this.dialog.open(LoginComponent_1, { width: '500px', height: '450px' });
    };
    var LoginComponent_1;
    LoginComponent = LoginComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    fxLayout=\"column\"\n    fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Menu</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex *ngIf=\"dishes\" [@expand]=\"expand\">\n    <mat-grid-list cols=\"2\" rowHeight=\"200px\">\n      <mat-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail', dish.id]\" appHighlight>\n        <img height=\"200px\" src=\"{{ BaseURL + dish.image }}\" alt={{dish.name}}>\n        <mat-grid-tile-footer>\n          <h1>{{dish.name | uppercase}}</h1>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n\n  <div fxFlex [hidden]=\"dishes || errMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"errMess\">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(dishService, BaseURL) {
        this.dishService = dishService;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishService.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")],
            host: {
                '[@flyInOut]': 'true',
                'style': 'display: block;'
            },
            animations: [
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["flyInOut"])(),
                Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_2__["expand"])()
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseURL')),
        __metadata("design:paramtypes", [_services_dish_service__WEBPACK_IMPORTED_MODULE_1__["DishService"], Object])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/dish.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/dish.service.ts ***!
  \******************************************/
/*! exports provided: DishService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function() { return DishService; });
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DishService = /** @class */ (function () {
    function DishService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    DishService.prototype.getDishes = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["BaseURL"] + 'dishes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService.prototype.getDish = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["BaseURL"] + 'dishes/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService.prototype.getFeaturedDish = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["BaseURL"] + 'dishes?featured=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dishes) { return dishes[0]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService.prototype.getDishIds = function () {
        return this.getDishes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dishes) { return dishes.map(function (dish) { return dish.id; }); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return error; }));
    };
    DishService.prototype.putDish = function (dish) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_2__["BaseURL"] + 'dishes/' + dish.id, dish, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    DishService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_0__["ProcessHTTPMsgService"]])
    ], DishService);
    return DishService;
}());



/***/ }),

/***/ "./src/app/services/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackService = /** @class */ (function () {
    function FeedbackService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    /** POST: add a new hero to the database */
    FeedbackService.prototype.submitFeedback = function (feedback) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
            }),
        };
        return this.http
            .post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_1__["BaseURL"] + "feedback", feedback, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.processHttpMsgService.handleError));
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/services/leader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/leader.service.ts ***!
  \********************************************/
/*! exports provided: LeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderService", function() { return LeaderService; });
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaderService = /** @class */ (function () {
    function LeaderService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    LeaderService.prototype.getLeaders = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_0__["BaseURL"] + 'leadership')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    LeaderService.prototype.getLeader = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_0__["BaseURL"] + 'leadership/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_0__["BaseURL"] + 'leadership?featured=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (leader) { return leader[0]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHttpMsgService.handleError));
    };
    LeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]])
    ], LeaderService);
    return LeaderService;
}());



/***/ }),

/***/ "./src/app/services/process-httpmsg.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = error.status + " - " + (error.statusText || '') + " " + error.error;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    };
    ProcessHTTPMsgService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());



/***/ }),

/***/ "./src/app/services/promotion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/promotion.service.ts ***!
  \***********************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromotionService = /** @class */ (function () {
    function PromotionService(http, processHttpMsgService) {
        this.http = http;
        this.processHttpMsgService = processHttpMsgService;
    }
    PromotionService.prototype.getPromotions = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["BaseURL"] + 'promotions')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.processHttpMsgService.handleError));
    };
    PromotionService.prototype.getPromotion = function (id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["BaseURL"] + 'promotions/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.processHttpMsgService.handleError));
    };
    PromotionService.prototype.getFeaturedPromotion = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["BaseURL"] + 'promotions?featured=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (promotion) { return promotion[0]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.processHttpMsgService.handleError));
    };
    PromotionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_0__["ProcessHTTPMsgService"]])
    ], PromotionService);
    return PromotionService;
}());



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: BaseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseURL", function() { return BaseURL; });
var BaseURL = 'http://localhost:3000/';


/***/ }),

/***/ "./src/app/shared/feedback.ts":
/*!************************************!*\
  !*** ./src/app/shared/feedback.ts ***!
  \************************************/
/*! exports provided: Feedback, ContactType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function() { return ContactType; });
var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    return Feedback;
}());

;
var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\conFusion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map