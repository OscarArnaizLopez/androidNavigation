"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
        this.counter = 0;
    }
    Object.defineProperty(MainComponent.prototype, "message", {
        get: function () {
            return this.counter + " times";
        },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.onTap = function () {
        this.router.navigate(["/new-window"]);
        this.counter++;
    };
    MainComponent.prototype.actionBarLoaded = function () {
        console.log('Action bar loaded');
    };
    MainComponent.prototype.tabviewloaded = function () {
        console.log('Tabview bar loaded');
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./pages/main.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map