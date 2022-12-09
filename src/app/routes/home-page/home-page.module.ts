import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HomePageRoutingModule } from "./home-page-router.module";
import { HomePageComponent } from "./home-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSlideToggleModule } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    declarations:[
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        SharedModule,
        // BrowserAnimationsModule
        // MatSlideToggleModule,
        MatSidenavModule,
        NgCircleProgressModule.forRoot({
          "radius": 30,
          "space": -10,
          "unitsColor": "#4882c2" ,
          "outerStrokeGradient": false,
          "outerStrokeWidth": 15,
          "outerStrokeColor": "#7AEE76",
          "outerStrokeGradientStopColor": "#53a9ff",
          "innerStrokeColor": "",
          "innerStrokeWidth": 10,
          "title": "",
          "animateTitle": false,
          "animationDuration": 1000,
          "showUnits": false,
          "showBackground": false,
          "showImage": true,
          "clockwise": true,
          "startFromZero": false,
          "lazy": true,
        //   "subtitleFormat": (percent:number): string =>{
        //     if(percent < 25){
        //       this.ngCircleOption.outerStrokeColor = "red";
        //     }
        //     else{
        //       this.ngCircleOption.outerStrokeColor = "green";
        //     }
        //     return '';
        //   }
        })
    ],
    providers: []
})
export class HomePageModule { }