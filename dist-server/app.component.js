"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@remult/core");
var authorization_service_1 = require("./common/authorization-service");
var AppComponent = /** @class */ (function () {
    function AppComponent(context, auth, router) {
        this.context = context;
        this.auth = auth;
        this.router = router;
        this.title = 'remult-angular-sample';
    }
    AppComponent.prototype.SignOut = function () {
        this.auth.signOut();
        this.router.navigateByUrl('/sign-in');
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.Context, authorization_service_1.CookieAuthorizationService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map