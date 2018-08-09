
import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    name: string
    public check: boolean = false;
    constructor() {
        this.name = 'Sam';
    }
    setCheck() {
        this.check = true;
    }
}
