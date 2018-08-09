
import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './account.component.html'
})
export class AccountComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}
