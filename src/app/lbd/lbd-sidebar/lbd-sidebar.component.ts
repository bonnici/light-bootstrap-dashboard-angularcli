import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

export interface SidebarItem {
  title: string;
  routerLink: string;
  imageClass: string;
}

@Component({
  selector: 'lbd-sidebar',
  templateUrl: './lbd-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
