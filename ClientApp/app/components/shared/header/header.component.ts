
import { Component, Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'shared-header',
    templateUrl :'./header.component.html'
})
export class HeaderComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
    navigateToAbout() {
        alert("hello");
    }
}

