import {Component} from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "my-new-window",
    templateUrl: "./pages/newwindow.component.html",
})
export class NewWindowComponent {

constructor(private router: RouterExtensions){}

    closePage(){
        this.router.back();
    }
}