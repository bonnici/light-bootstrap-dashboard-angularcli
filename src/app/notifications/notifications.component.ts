import { Component, OnInit } from '@angular/core';
import {NotificationService, NotificationType, NotificationOptions} from '../lbd/notification.service';
import { NavbarTitleService } from '../lbd/navbar-title.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }

  public ngOnInit() {
    this.navbarTitleService.updateTitle('Notifications');
  }

  public showNotification(from: string, align: string) {
    let type = Math.floor((Math.random() * 4) + 1);

    this.notificationService.notify(new NotificationOptions({
      message: 'Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.',
      icon: 'pe-7s-gift',
      type: <NotificationType>(type),
      from: from,
      align: align
    }));
  }
}
