import {Component} from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "my-app",
    templateUrl: "./pages/main.component.html",
})
export class MainComponent {

    constructor(private router: RouterExtensions){}
    public counter: number = 0;

    public get message(): string {
        return this.counter + " times";
    }
    
    public onTap() {
        this.router.navigate(["/new-window"]);
        this.counter++;
    }
    actionBarLoaded(){
        console.log('Action bar loaded')
    }

    tabviewloaded(){
        console.log('Tabview bar loaded')
    }
}