import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
//import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
//import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
//import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AboutComponent } from './components/About/About.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
    declarations: [
        AppComponent,
        //NavMenuComponent,
        //CounterComponent,
        //FetchDataComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        HeaderComponent,
        AccountComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home ', component: HomeComponent },
            { path: 'About', component: AboutComponent },
            { path: 'login', component: LoginComponent },
            { path: 'account', component: AccountComponent },
            //passing an id to a route
            //{ path: 'home/:id', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
