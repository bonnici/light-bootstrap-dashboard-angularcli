import { Component, Input, OnInit } from '@angular/core';
import { NavbarTitleService } from '../navbar-title.service';

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
export class LbdNavbarComponent implements OnInit {
  @Input()
  public leftItems: NavbarItem[];

  @Input()
  public rightItems: NavbarItem[];

  public title: string;

  constructor(private navbarTitleService: NavbarTitleService) { }

  public ngOnInit(): void {
    this.navbarTitleService.titleChanged$.subscribe(title => this.title = title);
  }
}
