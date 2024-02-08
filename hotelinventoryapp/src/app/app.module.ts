import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http/index.js";

import { RoomsComponent } from "./rooms/rooms.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ContainerComponent } from "./container/container.component";
import { RoomsService } from "./rooms/services/rooms.service";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";
import { RequestInterceptor } from "./request.interceptor";

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule], 
  providers: [ 
    RoomsService,
    { provide: APP_SERVICE_CONFIG, useValue: APP_CONFIG },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
