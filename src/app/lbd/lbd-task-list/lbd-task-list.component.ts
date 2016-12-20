import { Component, Input } from '@angular/core';

export interface Task {
  title: string;
  checked: boolean;
}

@Component({
  selector: 'lbd-task-list',
  templateUrl: './lbd-task-list.component.html',
  styleUrls: ['./lbd-task-list.component.css']
})
export class LbdTaskListComponent {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public tasks: Task[];

  @Input()
  public footerIconClass: string;

  @Input()
  public footerText: string;

  constructor() { }
}
