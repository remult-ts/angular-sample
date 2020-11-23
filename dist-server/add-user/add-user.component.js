"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var core_2 = require("@remult/core");
var users_1 = require("../users/users");
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(context, router) {
        this.context = context;
        this.router = router;
        this.newUser = this.context.for(users_1.Users).create();
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.addTheUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.newUser.save()];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('/users');
                        return [2 /*return*/];
                }
            });
        });
    };
    AddUserComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.Context, router_1.Router])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map