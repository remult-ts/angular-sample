"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@remult/core");
var Users = /** @class */ (function (_super) {
    tslib_1.__extends(Users, _super);
    function Users() {
        var _this = _super.call(this, {
            name: 'users',
            allowApiCRUD: true,
            saving: function () {
                if (_this.isNew())
                    _this.createdDate.value = new Date();
            }
        }) || this;
        _this.name = new core_1.StringColumn({
            validate: function () {
                if (_this.name.value.length < 3)
                    _this.name.validationError = 'Name is too short';
            }
        });
        _this.createdDate = new core_1.DateTimeColumn();
        return _this;
    }
    Users_1 = Users;
    Users.signIn = function (name, context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var u, user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, context.for(Users_1).findFirst(function (user) { return user.name.isEqualTo(name); })];
                    case 1:
                        u = _a.sent();
                        if (!u)
                            throw "user does not exist";
                        user = {
                            id: u.id.value,
                            name: u.name.value,
                            roles: []
                        };
                        return [2 /*return*/, user];
                }
            });
        });
    };
    var Users_1;
    tslib_1.__decorate([
        core_1.ServerFunction({ allowed: true }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, core_1.Context]),
        tslib_1.__metadata("design:returntype", Promise)
    ], Users, "signIn", null);
    Users = Users_1 = tslib_1.__decorate([
        core_1.EntityClass,
        tslib_1.__metadata("design:paramtypes", [])
    ], Users);
    return Users;
}(core_1.IdEntity));
exports.Users = Users;
//# sourceMappingURL=users.js.map