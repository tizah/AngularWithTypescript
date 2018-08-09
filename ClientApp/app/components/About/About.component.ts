
import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './About.component.html'
})
export class AboutComponent {
    name: string;
    values = '';
    keyEnterValue = '';
    items:any[] = [];
    constructor() {
        this.name = 'Sam';
    }
    onKey(event: any) { // without type info
        this.values += event.target.value + ' | ';
    }
    onEnter(value : string) {
        this.keyEnterValue = value;

    }
    addItem(newItem: string) {
        if (newItem) {
            this.items.push(newItem);
        }
    }
}

