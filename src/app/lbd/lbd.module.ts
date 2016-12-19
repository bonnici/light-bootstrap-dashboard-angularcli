import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LbdSidebarComponent } from './lbd-sidebar/lbd-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LbdSidebarComponent],
  exports: [LbdSidebarComponent]
})
export class LbdModule { }
