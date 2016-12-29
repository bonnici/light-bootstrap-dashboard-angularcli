import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

export interface SidebarItem {
  title: string;
  routerLink: string;
  imageClass: string;
}
export type BackgroundColor = 'blue' | 'azure' | 'green' | 'orange' | 'red' | 'purple';

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
  public backgroundColor: BackgroundColor;

  @Input()
  public backgroundImg: string;

  @Input()
  public items: SidebarItem[];

  constructor() { }

  public get backgroundStyle(): { [id: string]: string; } {
    return { 'background-image': `url(${this.backgroundImg})` };
  }
}
