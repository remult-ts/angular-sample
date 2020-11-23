"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DisplayAlertErrorErrorHandler = /** @class */ (function (_super) {
    tslib_1.__extends(DisplayAlertErrorErrorHandler, _super);
    function DisplayAlertErrorErrorHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayAlertErrorErrorHandler.prototype.handleError = function (error) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var message;
            return tslib_1.__generator(this, function (_a) {
                message = error.message;
                if (error.rejection) {
                    message = error.rejection.message;
                }
                alert(message);
                _super.prototype.handleError.call(this, error);
                return [2 /*return*/];
            });
        });
    };
    DisplayAlertErrorErrorHandler = tslib_1.__decorate([
        core_1.Injectable()
    ], DisplayAlertErrorErrorHandler);
    return DisplayAlertErrorErrorHandler;
}(core_1.ErrorHandler));
exports.DisplayAlertErrorErrorHandler = DisplayAlertErrorErrorHandler;
//# sourceMappingURL=error-handler.js.map