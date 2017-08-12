import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdCardModule, MdToolbarModule} from '@angular/material';
import { AppComponent } from './app.component';
import {PostService} from "./post.service";
import {HttpModule} from "@angular/http";
import {AuthGuardService, HomeRedirectService} from "./auth-guard.service";
import {AuthService} from "./auth.service";
import { QrscanloginpageComponent } from './qrscanloginpage/qrscanloginpage.component';
import { HomeafterscanComponent } from './homeafterscan/homeafterscan.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes:Routes=[{path:'',redirectTo:'/scan',pathMatch:'full'},
  {path:"scan",component:QrscanloginpageComponent,canActivate:[HomeRedirectService]},
  {path:'homepage',component:HomeafterscanComponent,canActivate:[AuthGuardService]}];

@NgModule({
  declarations: [
    AppComponent,
    QrscanloginpageComponent,
    HomeafterscanComponent
  ],
  imports: [
    BrowserModule,HttpModule,MdToolbarModule,
    MdCardModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService,AuthGuardService,AuthService,HomeRedirectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
