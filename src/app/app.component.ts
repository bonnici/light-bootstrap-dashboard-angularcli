import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app works!';

  public ngOnInit(): void {
    // demo.initChartist(); todo re-add when graph components are ready, move to afterviewinit? add typings, eventually re-write demo.js into angular style

    $.notify({
      icon: 'pe-7s-gift',
      message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."

    },{
      type: 'info',
      timer: 4000
    });
  }
}
