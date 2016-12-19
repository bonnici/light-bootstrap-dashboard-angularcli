import {Component, OnInit} from '@angular/core';
import { SidebarItem } from './lbd/lbd-sidebar/lbd-sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app works!';
  public sidebarItems: SidebarItem[];

  public ngOnInit(): void {
    // demo.initChartist(); todo re-add this and add typings when graph components are ready, move to afterviewinit?

    $.notify({
      icon: 'pe-7s-gift',
      message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
    },{
      type: 'info',
      timer: 4000
    });

    this.sidebarItems = [
      { title: "Dashboard", routerLink: "dashboard",  imageClass: "pe-7s-graph" },
      { title: "User Profile", routerLink: "user", imageClass: "pe-7s-user" },
      { title: "Table List", routerLink: "table", imageClass: "pe-7s-note2" },
      { title: "Typography", routerLink: "typography",  imageClass: "pe-7s-news-paper" },
      { title: "Icons", routerLink: "icons",  imageClass: "pe-7s-science" },
      { title: "Maps", routerLink: "maps",  imageClass: "pe-7s-map-marker" },
      { title: "Notifications", routerLink: "notifications",  imageClass: "pe-7s-bell" }
    ];
  }
}
