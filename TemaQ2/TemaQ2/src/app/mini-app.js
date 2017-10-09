"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// A mini-application
var core_1 = require("@angular/core");
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) { console.log(message); };
    return Logger;
}());
Logger = __decorate([
    core_1.Injectable()
], Logger);
exports.Logger = Logger;
var core_2 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(logger) {
        logger.log('Let the fun begin!');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_2.Component({
        selector: 'my-app',
        template: '<p>Welcome to Angular</p>'
    }),
    __metadata("design:paramtypes", [Logger])
], AppComponent);
exports.AppComponent = AppComponent;
var core_3 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_3.NgModule({
        imports: [platform_browser_1.BrowserModule],
        providers: [Logger],
        declarations: [AppComponent],
        exports: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=mini-app.js.map