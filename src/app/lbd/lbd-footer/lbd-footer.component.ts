import { Component, Input } from '@angular/core';

export class FooterItem {
  public title: string;
  public routerLink: string;
}

@Component({
  selector: 'lbd-footer',
  templateUrl: './lbd-footer.component.html',
  styleUrls: ['./lbd-footer.component.css']
})
export class LbdFooterComponent {
  @Input()
  public copywrite: string;

  @Input()
  public items: FooterItem[];

  constructor() { }
}
