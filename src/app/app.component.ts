import {Component, OnInit} from '@angular/core';
import { SidebarItem } from './lbd/lbd-sidebar/lbd-sidebar.component';
import { FooterItem } from './lbd/lbd-footer/lbd-footer.component';
import { NavbarItem } from './lbd/lbd-navbar/lbd-navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public sidebarItems: SidebarItem[];
  public navbarLeftItems: NavbarItem[];
  public navbarRightItems: NavbarItem[];
  public footerItems: FooterItem[];
  public copywrite: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.sidebarItems = [
      { title: 'Dashboard', routerLink: 'dashboard', imageClass: 'pe-7s-graph' },
      { title: 'User Profile', routerLink: 'user', imageClass: 'pe-7s-user' },
      { title: 'Table List', routerLink: 'table', imageClass: 'pe-7s-note2' },
      { title: 'Typography', routerLink: 'typography', imageClass: 'pe-7s-news-paper' },
      { title: 'Icons', routerLink: 'icons', imageClass: 'pe-7s-science' },
      { title: 'Maps', routerLink: 'maps', imageClass: 'pe-7s-map-marker' },
      { title: 'Notifications', routerLink: 'notifications', imageClass: 'pe-7s-bell' }
    ];

    this.navbarLeftItems = [
      { imageClass: 'fa fa-dashboard', routerLink: '' },
      {
        imageClass: 'fa fa-globe', routerLink: '', notifications: 5, dropdownItems: [
          { title: 'Notification 1', routerLink: '' },
          { title: 'Notification 2', routerLink: '' },
          { title: 'Notification 3', routerLink: '' },
          { title: 'Notification 4', routerLink: '' },
          { title: 'Another Notification', routerLink: 'maps' }
        ]
      },
      { imageClass: 'fa fa-search', routerLink: '' }
    ];

    this.navbarRightItems = [
      { title: 'Account', routerLink: '' },
      {
        title: 'Dropdown', routerLink: '', dropdownItems: [
          { title: 'Action', routerLink: '' },
          { title: 'Another action', routerLink: '' },
          { title: 'Something', routerLink: '' },
          { title: 'Another action', routerLink: '' },
          { title: 'Something', routerLink: '' },
          { },
          { title: 'Separated link', routerLink: '' },
        ]
      },
      { title: 'Log out', routerLink: '' }
    ];

    this.footerItems = [
      { title: 'Home', routerLink: '' },
      { title: 'Company', routerLink: '' },
      { title: 'Portfolio', routerLink: '' },
      { title: 'Blog', routerLink: '' }
    ];
    this.copywrite = '&copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web';
  }
}
