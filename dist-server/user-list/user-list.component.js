"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@remult/core");
var users_1 = require("../users/users");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(context) {
        this.context = context;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserListComponent.prototype.loadUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.context.for(users_1.Users).find({
                                orderBy: function (u) { return u.name; }
                            })];
                    case 1:
                        _a.users = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserListComponent.prototype.deleteUser = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user.delete()];
                    case 1:
                        _a.sent();
                        this.loadUsers();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.Context])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map