import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RoomsComponent } from "./rooms/rooms.component";
import { RoomsListComponent } from "./rooms/rooms-list/rooms-list.component.js";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
