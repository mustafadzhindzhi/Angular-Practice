import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component.js";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component.js";
import { ContainerComponent } from "./container/container.component.js";
import { EmployeeComponent } from "./employee/employee.component.js";

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent, EmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
