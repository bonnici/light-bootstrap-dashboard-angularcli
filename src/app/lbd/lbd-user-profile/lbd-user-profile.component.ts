import { Component, Input } from '@angular/core';

@Component({
  selector: 'lbd-user-profile',
  templateUrl: './lbd-user-profile.component.html',
  styleUrls: ['./lbd-user-profile.component.css']
})
export class LbdUserProfileComponent {
  @Input()
  backgroundImage: string;

  @Input()
  avatarImage: string;

  @Input()
  name: string;

  @Input()
  username: string;

  @Input()
  about: string;

  constructor() { }
}
