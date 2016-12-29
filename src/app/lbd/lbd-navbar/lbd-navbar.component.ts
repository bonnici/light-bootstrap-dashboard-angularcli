import {Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { NavbarTitleService } from '../navbar-title.service';
import { NavItem, NavItemType } from '../lbd.module';

@Component({
  selector: 'lbd-navbar',
  templateUrl: './lbd-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdNavbarComponent implements OnInit {
  @Input()
  public navItems: NavItem[];

  public title: string;

  constructor(private navbarTitleService: NavbarTitleService, private cd: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.navbarTitleService.titleChanged$.subscribe(title => {
      this.title = title;
      this.cd.markForCheck();
    });
  }

  public get leftNavItems(): NavItem[] {
    return this.navItems.filter(i => i.type === NavItemType.NavbarLeft);
  }

  public get rightNavItems(): NavItem[] {
    return this.navItems.filter(i => i.type === NavItemType.NavbarRight);
  }
}
