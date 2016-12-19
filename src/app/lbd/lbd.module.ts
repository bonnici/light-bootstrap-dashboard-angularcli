import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LbdSidebarComponent } from './lbd-sidebar/lbd-sidebar.component';
import { LbdNavbarComponent } from './lbd-navbar/lbd-navbar.component';
import { LbdFooterComponent } from './lbd-footer/lbd-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LbdSidebarComponent, LbdNavbarComponent, LbdFooterComponent],
  exports: [LbdSidebarComponent, LbdNavbarComponent, LbdFooterComponent]
})
export class LbdModule { }
