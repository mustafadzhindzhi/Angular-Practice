import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EmployeeComponent } from "./employee/employee.component";
import { ContainerComponent } from "./container/container.component";
import { RoomsService } from "./rooms/services/rooms.service";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule], 
  providers: [ RoomsService,
    {provide: APP_SERVICE_CONFIG, useValue:APP_CONFIG},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
