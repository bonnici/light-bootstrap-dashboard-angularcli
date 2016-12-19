import {Component, OnInit} from '@angular/core';
import { SidebarItem } from './lbd/lbd-sidebar/lbd-sidebar.component';
import { FooterItem } from './lbd/lbd-footer/lbd-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sidebarItems: SidebarItem[];
  public footerItems: FooterItem[];
  public copywrite: string;

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
      { title: "Dashboard", routerLink: "dashboard", imageClass: "pe-7s-graph" },
      { title: "User Profile", routerLink: "user", imageClass: "pe-7s-user" },
      { title: "Table List", routerLink: "table", imageClass: "pe-7s-note2" },
      { title: "Typography", routerLink: "typography", imageClass: "pe-7s-news-paper" },
      { title: "Icons", routerLink: "icons", imageClass: "pe-7s-science" },
      { title: "Maps", routerLink: "maps", imageClass: "pe-7s-map-marker" },
      { title: "Notifications", routerLink: "notifications", imageClass: "pe-7s-bell" }
    ];

    this.footerItems = [
      { title: "Home", routerLink: "" },
      { title: "Company", routerLink: "" },
      { title: "Portfolio", routerLink: "" },
      { title: "Blog", routerLink: "" }
    ];
    this.copywrite = '&copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web';
  }
}
