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
      new SidebarItem("dashboard.html", "Dashboard", "pe-7s-graph"),
      new SidebarItem("user.html", "User Profile", "pe-7s-user"),
      new SidebarItem("table.html", "Table List", "pe-7s-note2"),
      new SidebarItem("typography.html", "Typography", "pe-7s-news-paper"),
      new SidebarItem("icons.html", "Icons", "pe-7s-science"),
      new SidebarItem("maps.html", "Maps", "pe-7s-map-marker"),
      new SidebarItem("notifications.html", "Notifications", "pe-7s-bell"),
      new SidebarItem("upgrade.html", "Upgrade to PRO", "pe-7s-rocket", "active-pro")
    ];
  }
}
