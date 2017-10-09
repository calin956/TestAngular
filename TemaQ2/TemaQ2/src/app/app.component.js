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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.showCreate = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/Car/GetCarsJson').subscribe(function (data) {
            _this.cars = data;
        });
    };
    AppComponent.prototype.AddCar = function (Name, Type, Engine, Color, NumberOfDoors) {
        var car = { Name: Name, Type: Type, Engine: Engine, Color: Color, NumberOfDoors: NumberOfDoors };
        this.http.post('/Car/Create', car).subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'car-add',
        templateUrl: './CarSelectors/CarList.html',
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map