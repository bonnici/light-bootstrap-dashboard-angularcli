import { Component, Input } from '@angular/core';

export interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'lbd-table',
  templateUrl: './lbd-table.component.html',
  styleUrls: ['./lbd-table.component.css']
})
export class LbdTableComponent {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public cardClass: string;

  @Input()
  public data: TableData;

  constructor() { }
}
