import { Injectable } from '@angular/core';

export enum NotificationType {
  Info,
  Success,
  Warning,
  Danger
}

@Injectable()
export class NotificationService {

  constructor() { }

  public notify(message: string, icon: string, timer?: number, type?: NotificationType, from?: string, align?: string): void {
    let typeString;
    switch (type) {
      case NotificationType.Success:
        typeString = 'success';
        break;
      case NotificationType.Warning:
        typeString = 'warning';
        break;
      case NotificationType.Danger:
        typeString = 'danger';
        break;
      default:
        typeString = 'info';
        break;
    }

    $.notify(
      {
        icon: icon,
        message: message
      },
      {
        type: typeString,
        timer: timer || 4000,
        placement: {
          from: from || 'top',
          align: align || 'right'
        }
      });
  }
}
