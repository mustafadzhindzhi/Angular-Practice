import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component.js';
import { RoomsComponent } from './rooms/rooms.component.js';
import { NotfoundComponent } from './notfound/notfound.component.js';

const routes: Routes = [
  // Example: { path: 'some-path', component: SomeComponent },
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: '', redirectTo:'/rooms', pathMatch:'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
