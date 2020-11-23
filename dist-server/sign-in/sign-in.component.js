"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@remult/core");
var authorization_service_1 = require("../common/authorization-service");
var users_1 = require("../users/users");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(auth, context, router) {
        this.auth = auth;
        this.context = context;
        this.router = router;
        this.name = "";
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_1.Users.signIn(this.name)];
                    case 1:
                        token = _a.sent();
                        this.auth.afterSignIn(token);
                        alert("Hello " + this.context.user.name);
                        this.router.navigateByUrl('/users');
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [authorization_service_1.CookieAuthorizationService, core_2.Context, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map