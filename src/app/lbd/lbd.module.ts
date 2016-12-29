import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LbdSidebarComponent } from './lbd-sidebar/lbd-sidebar.component';
import { LbdNavbarComponent } from './lbd-navbar/lbd-navbar.component';
import { LbdFooterComponent } from './lbd-footer/lbd-footer.component';
import { LbdChartComponent } from './lbd-chart/lbd-chart.component';
import { LbdTaskListComponent } from './lbd-task-list/lbd-task-list.component';
import { NotificationService } from './notification.service';
import { LbdTableComponent } from './lbd-table/lbd-table.component';
import { LbdUserProfileComponent } from './lbd-user-profile/lbd-user-profile.component';
import { NavbarTitleService } from './navbar-title.service';
import { LbdCheckboxComponent } from './lbd-checkbox/lbd-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [NotificationService, NavbarTitleService],
  declarations: [
    LbdSidebarComponent,
    LbdNavbarComponent,
    LbdFooterComponent,
    LbdChartComponent,
    LbdTaskListComponent,
    LbdTableComponent,
    LbdUserProfileComponent,
    LbdCheckboxComponent
  ],
  exports: [
    LbdSidebarComponent,
    LbdNavbarComponent,
    LbdFooterComponent,
    LbdChartComponent,
    LbdTaskListComponent,
    LbdTableComponent,
    LbdUserProfileComponent
  ]
})
export class LbdModule { }
