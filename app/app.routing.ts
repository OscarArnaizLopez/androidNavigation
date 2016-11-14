import { MainComponent } from "./pages/main.component";
import {NewWindowComponent} from "./pages/newwindow.component"

export const routes = [
  { path: "", component: MainComponent },
  { path: "new-window", component: NewWindowComponent }
];

export const navigatableComponents = [
  MainComponent,
  NewWindowComponent
];
