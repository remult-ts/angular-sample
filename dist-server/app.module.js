"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var core_2 = require("@remult/core");
var user_list_component_1 = require("./user-list/user-list.component");
var forms_1 = require("@angular/forms");
var error_handler_1 = require("./common/error-handler");
var add_user_component_1 = require("./add-user/add-user.component");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_list_component_1.UserListComponent,
                add_user_component_1.AddUserComponent,
                sign_in_component_1.SignInComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [{ provide: core_2.Context, useClass: core_2.Context }, { provide: core_1.ErrorHandler, useClass: error_handler_1.DisplayAlertErrorErrorHandler }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map