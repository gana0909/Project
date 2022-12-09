import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard4';

  constructor(private route: ActivatedRoute,) {}

  animationstate: any;

  onActivate($event:any){
    
  }
}
