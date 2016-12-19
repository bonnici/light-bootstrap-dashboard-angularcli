import { Component, Input } from '@angular/core';

export interface NavbarDropdownItem {
  title?: string;
  routerLink?: string;
}

export interface NavbarItem {
  title?: string;
  routerLink?: string;
  imageClass?: string;
  dropdownItems?: NavbarDropdownItem[];
  notifications?: number;
}

@Component({
  selector: 'lbd-navbar',
  templateUrl: './lbd-navbar.component.html',
  styleUrls: ['./lbd-navbar.component.css']
})
export class LbdNavbarComponent {
  @Input()
  public leftItems: NavbarItem[];

  @Input()
  public rightItems: NavbarItem[];

  constructor() { }
}
