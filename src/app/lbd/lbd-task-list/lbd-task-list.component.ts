import { Component, Input, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';

export interface Task {
  title: string;
  checked: boolean;
}

@Component({
  selector: 'lbd-task-list',
  templateUrl: './lbd-task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdTaskListComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
    $('[data-toggle="checkbox"]').each(function () {
      if ($(this).data('toggle') === 'switch') {
        return;
      }

      let $checkbox: any = $(this);
      $checkbox.checkbox();
    });
  }
}
