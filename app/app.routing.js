"use strict";
var main_component_1 = require("./pages/main.component");
var newwindow_component_1 = require("./pages/newwindow.component");
exports.routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "new-window", component: newwindow_component_1.NewWindowComponent }
];
exports.navigatableComponents = [
    main_component_1.MainComponent,
    newwindow_component_1.NewWindowComponent
];
//# sourceMappingURL=app.routing.js.map