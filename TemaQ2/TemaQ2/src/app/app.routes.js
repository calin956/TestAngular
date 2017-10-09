"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var car_add_component_1 = require("./car-add.component");
exports.router = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: app_component_1.AppComponent },
    { path: 'create', component: car_add_component_1.CarAddComponent },
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map