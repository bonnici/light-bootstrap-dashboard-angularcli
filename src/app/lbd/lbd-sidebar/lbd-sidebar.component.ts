import {Component, Input} from '@angular/core';

export class SidebarItem {
  public title: string;
  public routerLink: string;
  public imageClass: string;
}

@Component({
  selector: 'lbd-sidebar',
  templateUrl: './lbd-sidebar.component.html',
  styleUrls: ['./lbd-sidebar.component.css']
})
export class LbdSidebarComponent {
  @Input()
  public headerText: string;

  @Input()
  public headerLink: string;

  @Input()
  public headerLogoImg: string;

  @Input()
  public items: SidebarItem[];

  constructor() { }
}
