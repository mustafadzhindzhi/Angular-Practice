// app-nav.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';

import { AppNavComponent } from './app-nav/app-nav.component.js';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
  ],
  exports: [
    AppNavComponent,
  ],
})
export class AppNavModule {}
