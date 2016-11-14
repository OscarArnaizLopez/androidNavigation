"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var NewWindowComponent = (function () {
    function NewWindowComponent(router) {
        this.router = router;
    }
    NewWindowComponent.prototype.closePage = function () {
        this.router.back();
    };
    NewWindowComponent = __decorate([
        core_1.Component({
            selector: "my-new-window",
            templateUrl: "./pages/newwindow.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], NewWindowComponent);
    return NewWindowComponent;
}());
exports.NewWindowComponent = NewWindowComponent;
//# sourceMappingURL=newwindow.component.js.map