import { Component, OnInit , NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  width: any;

  constructor(private zone: NgZone) { };

  ngOnInit(): void {
    this.width= 45 ;
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("line-chart", am4charts.XYChart);
      let title = chart.titles.create();
      title.text = "Product Sales by area";

      let data = [
        { "area": "Florida", "computers":20, "cars": "",}
      ]
    })
  }

  ngOnDestroy(){

  }

  ngCircleOption(){
    this.width=22;
  }

}
