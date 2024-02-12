import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import { AppNavModule } from "./app-nav.module";
import { RequestInterceptor } from "./request.interceptor";
import { InitService } from "./init.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { EmployeeComponent } from "./employee/employee.component";

import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";

function initFactory(initService: InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    RoomsComponent,
    RoomsListComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AppNavModule,
  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
