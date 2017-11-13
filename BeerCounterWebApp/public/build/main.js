webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Login = (function () {
    function Login(navCtrl, httpProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.alertCtrl = alertCtrl;
    }
    Login.prototype.ionViewWillEnter = function () {
        this.name = "";
        this.password = "";
    };
    Login.prototype.authenticate = function () {
        var _this = this;
        this.httpProvider.authenticateUser(this.name, this.password)
            .then(function (data) {
            if (data) {
                _this.data = data;
                if (_this.data.success) {
                    if (_this.data.user.admin) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */], { 'user': _this.data.user });
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */], { 'user': _this.data.user });
                    }
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: _this.data.message,
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    subTitle: "Connection failed! Please try again later.",
                    buttons: ['Ok']
                });
                alert_2.present();
            }
        });
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Beer Counter Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="name" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password" required></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="authenticate()">Login</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_overview_overview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_userlist_userlist__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminPage = (function () {
    function AdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isEnabled = false;
        this.user = navParams.get("user");
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__tabs_overview_overview__["a" /* OverView */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__tabs_userlist_userlist__["a" /* UserList */];
    }
    AdminPage.prototype.logout = function () {
        this.navCtrl.pop();
    };
    return AdminPage;
}());
AdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-TabAdmin',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      Hallo {{user.name}}\n    </ion-title>\n        <ion-buttons end>\n            <button (click)="logout()">Logout</button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-tabs #myTabs>\n    <ion-tab [root]="tab1" [rootParams]="user" tabTitle="Overview"></ion-tab>\n    <ion-tab [root]="tab2" [rootParams]="user" tabTitle="Userlist"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\admin.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AdminPage);

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverView = (function () {
    function OverView(navCtrl, httpProvider, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.activeAdmin = navParams.data;
    }
    OverView.prototype.ionViewWillEnter = function () {
        this.loadAvailable();
    };
    OverView.prototype.loadAvailable = function () {
        var _this = this;
        this.httpProvider.loadAvailable()
            .then(function (available) {
            _this.available = available[0];
        });
    };
    OverView.prototype.incrementCounter = function () {
        var _this = this;
        var newCounter = this.activeAdmin.counter + 1;
        this.httpProvider.updateUser(this.activeAdmin._id, this.activeAdmin.password, newCounter)
            .then(function (admin) {
            _this.activeAdmin = admin;
        });
        var newAvailable = this.available.available - 1;
        this.httpProvider.updateAvailable(this.available._id, newAvailable.toString())
            .then(function (available) {
            _this.available = available;
        });
    };
    OverView.prototype.setCounter = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Set Counter',
            subTitle: 'Set Counter from ' + this.activeAdmin.name + ' manually.',
            inputs: [{
                    name: 'counterValue',
                    value: this.activeAdmin.counter
                }],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log("Canceled");
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.httpProvider.updateUser(_this.activeAdmin._id, _this.activeAdmin.password, data.counterValue)
                            .then(function (user) {
                            _this.activeAdmin = user;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    OverView.prototype.resetCounter = function () {
        var _this = this;
        this.httpProvider.updateUser(this.activeAdmin._id, this.activeAdmin.password, '0')
            .then(function (admin) {
            _this.activeAdmin = admin;
        });
    };
    OverView.prototype.setAvailable = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Set Available',
            inputs: [{
                    name: 'availableValue',
                    value: this.available.available
                }],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log("Canceled");
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.httpProvider.updateAvailable(_this.available._id, data.availableValue)
                            .then(function (available) {
                            _this.available = available;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return OverView;
}());
OverView = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-overview',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\overview\overview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hallo {{activeAdmin.name}}!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            Counter:\n        </ion-card-header>\n        <ion-card-content *ngIf="activeAdmin">\n            Du hast aktuell {{activeAdmin.counter}} Bier auf der Liste!\n        </ion-card-content>\n        <ion-item padding-horizontal>\n          <button ion-button block (click)="incrementCounter()" *ngIf="available" [attr.disabled]="available.available==0?\'\':null">Bier!</button>\n          <button ion-button block (click)="setCounter()">Set Counter</button>\n          <button ion-button block (click)="resetCounter()">Reset Counter</button>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-card-header *ngIf="available">\n            Verfügbares Bier: {{available.available}}\n        </ion-card-header>\n        <ion-item padding-horizontal>\n          <button ion-button block (click)="setAvailable()">Set available</button>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\overview\overview.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OverView);

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userdetail_userdetail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adduser_adduser__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserList = (function () {
    function UserList(navCtrl, httpProvider, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.activeAdmin = navParams.data;
    }
    UserList.prototype.ionViewWillEnter = function () {
        this.loadUsers();
    };
    UserList.prototype.loadUsers = function () {
        var _this = this;
        this.httpProvider.loadUsers()
            .then(function (users) {
            _this.users = users;
        });
    };
    UserList.prototype.callAddUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__adduser_adduser__["a" /* AddUser */]);
    };
    UserList.prototype.callUserDetails = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__userdetail_userdetail__["a" /* UserDetails */], { "user": user });
    };
    return UserList;
}());
UserList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userlist',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\userlist\userlist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      User\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button block (click)="callAddUserPage()">Add User</button>    \n      <ion-list *ngIf="users" margin-top>\n        <ion-item-sliding *ngFor="let user of users">\n          <ion-item (click)="callUserDetails(user)" *ngIf="activeAdmin && !(activeAdmin._id == user._id)">\n            <ion-row>\n              <ion-col align-self-start>\n                <h2 text-left>{{user.name}}</h2>\n              </ion-col>\n              <ion-col align-self-end>\n                <h2 text-right>{{user.counter}}</h2>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\userlist\userlist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], UserList);

//# sourceMappingURL=userlist.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetails = (function () {
    function UserDetails(navCtrl, httpProvider, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = navParams.get("user");
    }
    UserDetails.prototype.resetCounter = function () {
        var _this = this;
        this.httpProvider.updateUser(this.user._id, this.user.password, '0')
            .then(function (user) {
            _this.user = user;
        });
    };
    UserDetails.prototype.setCounter = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Set Counter',
            subTitle: 'Set Counter from ' + this.user.name + ' manually.',
            inputs: [{
                    name: 'counterValue',
                    value: this.user.counter
                }],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log("Canceled");
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.httpProvider.updateUser(_this.user._id, _this.user.password, data.counterValue)
                            .then(function (user) {
                            _this.user = user;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UserDetails.prototype.deleteUser = function () {
        var _this = this;
        this.httpProvider.deleteUser(this.user._id)
            .then(function (message) {
            _this.deleteMessage = message;
            var alert = _this.alertCtrl.create({
                subTitle: _this.deleteMessage.message,
                buttons: ['Ok']
            });
            alert.present();
            _this.navCtrl.pop();
        });
    };
    UserDetails.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return UserDetails;
}());
UserDetails = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userDetails',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\userdetail\userdetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{user.name}} bearbeiten\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n      <ion-list *ngIf="user">\n        <ion-item>\n          <h2>{{user.name}}: {{user.counter}}</h2>\n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="resetCounter()">Reset Counter</button>\n    <button ion-button block (click)="setCounter()">Set Counter</button>\n    <button ion-button block (click)="deleteUser()">Delete User</button>\n    <button ion-button block (click)="cancel()">Cancel</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\userdetail\userdetail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], UserDetails);

//# sourceMappingURL=userdetail.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUser = (function () {
    function AddUser(navCtrl, httpProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.alertCtrl = alertCtrl;
        this.isAdmin = false;
    }
    AddUser.prototype.addUser = function () {
        var _this = this;
        this.httpProvider.checkIfUserExist(this.name)
            .then(function (data) {
            _this.data = data;
            if (!_this.data.success) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: "User " + _this.name + " already exist! Please try another name.",
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            else {
                var isAdmin = _this.isAdmin ? "true" : "false";
                _this.httpProvider.createUser(_this.name, _this.password, isAdmin)
                    .then(function (user) {
                    _this.userCreated = user;
                    var alert = _this.alertCtrl.create({
                        subTitle: "User " + _this.userCreated.name + " successfully created!",
                        buttons: ['Ok']
                    });
                    alert.present();
                    _this.navCtrl.pop();
                });
            }
        });
    };
    AddUser.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    return AddUser;
}());
AddUser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-adduser',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\adduser\adduser.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      User hinzufügen\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="name" required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password" required></ion-input>\n        </ion-item>\n        <ion-item margin-top>\n            <ion-label>Admin</ion-label>\n            <ion-toggle [(ngModel)]="isAdmin"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <button ion-button block (click)="addUser()">Add User</button>\n    <button ion-button block (click)="cancel()">Cancel</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\admin\tabs\adduser\adduser.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AddUser);

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPage = (function () {
    function UserPage(navCtrl, httpProvider, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.httpProvider = httpProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.activeUser = navParams.get("user");
        this.loadAvailable();
    }
    UserPage.prototype.incrementCounter = function () {
        var _this = this;
        var newCounter = this.activeUser.counter + 1;
        this.httpProvider.updateUser(this.activeUser._id, this.activeUser.password, newCounter)
            .then(function (user) {
            _this.activeUser = user;
        });
        var newAvailable = this.available.available - 1;
        this.httpProvider.updateAvailable(this.available._id, newAvailable.toString())
            .then(function (available) {
            _this.available = available;
        });
    };
    UserPage.prototype.loadAvailable = function () {
        var _this = this;
        this.httpProvider.loadAvailable()
            .then(function (available) {
            _this.available = available[0];
        });
    };
    UserPage.prototype.changePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Password',
            subTitle: 'Change Password from ' + this.activeUser.name + '.',
            inputs: [{
                    name: 'oldPassword',
                    type: 'password',
                    placeholder: 'Old Password'
                },
                {
                    name: 'newPassword',
                    type: 'password',
                    placeholder: 'New Password'
                }],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log("Canceled");
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        if (_this.activeUser.password == data.oldPassword) {
                            _this.httpProvider.updateUser(_this.activeUser._id, data.newPassword, _this.activeUser.counter)
                                .then(function (user) {
                                _this.activeUser = user;
                            });
                            var alert_1 = _this.alertCtrl.create({
                                subTitle: "Password changed!",
                                buttons: ['Ok']
                            });
                            alert_1.present();
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                subTitle: "Wrong Password! Please try again.",
                                buttons: ['Ok']
                            });
                            alert_2.present();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\user\user.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hallo {{activeUser.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <h1>Counter:</h1>\n        </ion-card-header>\n        <ion-card-content>\n            <h2>Du hast aktuell {{activeUser.counter}} Bier auf der Liste!</h2>\n            <h2 *ngIf="available">Insgesamt sind noch {{available.available}} Bier verfügbar.</h2>\n        </ion-card-content>\n    </ion-card>\n    <button ion-button block margin-top (click)="incrementCounter()" *ngIf="available" [attr.disabled]="available.available==0?\'\':null">Bier!</button>\n    <button ion-button block (click)="changePassword()">Passwort ändern</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\pages\user\user.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_admin__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_tabs_overview_overview__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_tabs_userlist_userlist__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_tabs_userdetail_userdetail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_tabs_adduser_adduser__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_http_http__ = __webpack_require__(28);
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
            __WEBPACK_IMPORTED_MODULE_7__pages_admin_admin__["a" /* AdminPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_admin_tabs_userdetail_userdetail__["a" /* UserDetails */],
            __WEBPACK_IMPORTED_MODULE_12__pages_admin_tabs_adduser_adduser__["a" /* AddUser */],
            __WEBPACK_IMPORTED_MODULE_8__pages_admin_tabs_overview_overview__["a" /* OverView */],
            __WEBPACK_IMPORTED_MODULE_9__pages_admin_tabs_userlist_userlist__["a" /* UserList */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_admin_admin__["a" /* AdminPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_admin_tabs_userdetail_userdetail__["a" /* UserDetails */],
            __WEBPACK_IMPORTED_MODULE_12__pages_admin_tabs_adduser_adduser__["a" /* AddUser */],
            __WEBPACK_IMPORTED_MODULE_8__pages_admin_tabs_overview_overview__["a" /* OverView */],
            __WEBPACK_IMPORTED_MODULE_9__pages_admin_tabs_userlist_userlist__["a" /* UserList */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_http_http__["a" /* HttpProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(194);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jona\Google Drive\Projects\IonicProjects\RESTfulApp2\RESTfulApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        this.url = 'http://192.168.0.112:3000';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }
    HttpProvider.prototype.authenticateUser = function (name, password) {
        var _this = this;
        var body = 'name=' + name + '&password=' + password;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var url = this.url + '/authenticate/';
        return new Promise(function (resolve) {
            _this.http.post(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                localStorage.setItem("token", data.token); //zu sessionStorage ändern
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.loadUsers = function () {
        var _this = this;
        if (!this.headers.has('x-access-token'))
            this.headers.append('x-access-token', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var url = this.url + '/users';
        return new Promise(function (resolve) {
            _this.http.get(url, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (users) {
                resolve(users);
            });
        });
    };
    HttpProvider.prototype.createUser = function (name, password, admin) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = 'name=' + name + '&password=' + password + '&counter=0' + '&admin=' + admin;
        var url = this.url + '/users/';
        return new Promise(function (resolve) {
            _this.http.post(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (user) {
                resolve(user);
            });
        });
    };
    HttpProvider.prototype.checkIfUserExist = function (name) {
        var _this = this;
        if (!this.headers.has('x-access-token'))
            this.headers.append('x-access-token', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = 'name=' + name;
        var url = this.url + '/checkuser/';
        return new Promise(function (resolve) {
            _this.http.post(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    HttpProvider.prototype.updateUser = function (userID, password, counter) {
        var _this = this;
        if (!this.headers.has('x-access-token'))
            this.headers.append('x-access-token', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = 'password=' + password + '&counter=' + counter;
        var url = this.url + '/users/' + userID;
        return new Promise(function (resolve) {
            _this.http.put(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (user) {
                resolve(user);
            });
        });
    };
    HttpProvider.prototype.deleteUser = function (userID) {
        var _this = this;
        if (!this.headers.has('x-access-token'))
            this.headers.append('x-access-token', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var url = this.url + '/users/' + userID;
        return new Promise(function (resolve) {
            _this.http.delete(url, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (message) {
                resolve(message);
            });
        });
    };
    HttpProvider.prototype.loadAvailable = function () {
        var _this = this;
        if (!this.headers.has('x-access-token'))
            this.headers.append('x-access-token', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var url = this.url + '/available';
        return new Promise(function (resolve) {
            _this.http.get(url, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (available) {
                resolve(available);
            });
        });
    };
    HttpProvider.prototype.updateAvailable = function (availableID, available) {
        var _this = this;
        if (!this.headers.has('x-access-token'))
            this.headers.append('x-access-token', localStorage.getItem("token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        var body = 'available=' + available;
        var url = this.url + '/available/' + availableID;
        return new Promise(function (resolve) {
            _this.http.put(url, body, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (available) {
                resolve(available);
            });
        });
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttpProvider);

//# sourceMappingURL=http.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map