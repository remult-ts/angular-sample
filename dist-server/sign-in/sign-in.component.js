"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var users_1 = require("../users/users");
var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
        this.name = "";
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signIn = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users_1.Users.signIn(this.name)];
                    case 1:
                        user = _a.sent();
                        alert("Hello " + user.name);
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
        tslib_1.__metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map