import {Component, Input} from '@angular/core';

export class SidebarItem {
  //todo change link to router thing & check active
  constructor(public link: string, public title: string, public imageClass: string, public itemClass?: string) {}
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
