import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module"; 
import { RoomsComponent } from "./rooms/rooms.component.js"; 
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, RoomsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
