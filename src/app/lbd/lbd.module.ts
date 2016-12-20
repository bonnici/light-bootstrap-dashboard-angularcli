import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LbdSidebarComponent } from './lbd-sidebar/lbd-sidebar.component';
import { LbdNavbarComponent } from './lbd-navbar/lbd-navbar.component';
import { LbdFooterComponent } from './lbd-footer/lbd-footer.component';
import { LbdChartComponent } from './lbd-chart/lbd-chart.component';
import { LbdTaskListComponent } from './lbd-task-list/lbd-task-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LbdSidebarComponent, LbdNavbarComponent, LbdFooterComponent, LbdChartComponent, LbdTaskListComponent],
  exports: [LbdSidebarComponent, LbdNavbarComponent, LbdFooterComponent, LbdChartComponent, LbdTaskListComponent]
})
export class LbdModule { }
