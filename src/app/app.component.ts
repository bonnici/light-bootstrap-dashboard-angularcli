import {Component, OnInit} from '@angular/core';
import { NavItem, NavItemType } from './lbd/lbd.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public navItems: NavItem[];

  constructor() {
  }

  public ngOnInit(): void {
    this.navItems = [
      { type: NavItemType.Sidebar, title: 'Dashboard', routerLink: 'dashboard', iconClass: 'pe-7s-graph' },
      { type: NavItemType.Sidebar, title: 'User Profile', routerLink: 'user', iconClass: 'pe-7s-user' },
      { type: NavItemType.Sidebar, title: 'Table List', routerLink: 'table', iconClass: 'pe-7s-note2' },
      { type: NavItemType.Sidebar, title: 'Typography', routerLink: 'typography', iconClass: 'pe-7s-news-paper' },
      { type: NavItemType.Sidebar, title: 'Icons', routerLink: 'icons', iconClass: 'pe-7s-science' },
      { type: NavItemType.Sidebar, title: 'Maps', routerLink: 'maps', iconClass: 'pe-7s-map-marker' },
      { type: NavItemType.Sidebar, title: 'Notifications', routerLink: 'notifications', iconClass: 'pe-7s-bell' },

      { type: NavItemType.NavbarLeft, title: 'Dashboard', routerLink: '404', iconClass: 'fa fa-dashboard' },
      {
        type: NavItemType.NavbarLeft,
        title: '5 Notifications',
        routerLink: '404',
        iconClass: 'fa fa-globe',
        numNotifications: 5,
        dropdownItems: [
          { title: 'Notification 1', routerLink: '404' },
          { title: 'Notification 2', routerLink: '404' },
          { title: 'Notification 3', routerLink: '404' },
          { title: 'Notification 4', routerLink: '404' },
          { title: 'Another Notification', routerLink: '404' }
        ]
      },
      { type: NavItemType.NavbarLeft, title: 'Search', routerLink: '404', iconClass: 'fa fa-search' },

      { type: NavItemType.NavbarRight, title: 'Account', routerLink: '404'},
      {
        type: NavItemType.NavbarRight,
        title: 'Dropdown',
        routerLink: '404',
        dropdownItems: [
          { title: 'Action', routerLink: '404' },
          { title: 'Another action', routerLink: '404' },
          { title: 'Something', routerLink: '404' },
          { title: 'Another action', routerLink: '404' },
          { title: 'Something', routerLink: '404' },
          'separator',
          { title: 'Separated link', routerLink: '404' },
        ]
      },
      { type: NavItemType.NavbarRight, title: 'Log out', routerLink: '404' }
    ];
  }
}
