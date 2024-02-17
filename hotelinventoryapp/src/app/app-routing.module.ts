import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component.js';
import { RoomsComponent } from './rooms/rooms.component.js';
import { NotfoundComponent } from './notfound/notfound.component.js';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component.js';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component.js';

const routes: Routes = [
  // Example: { path: 'some-path', component: SomeComponent },
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path:'rooms/add', component: RoomsAddComponent},
  {path: 'rooms/:roomid', component: RoomsBookingComponent},
  {path: '', redirectTo:'/rooms', pathMatch:'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
