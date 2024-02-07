import { AfterContentInit, Component, ContentChild, OnInit, ViewChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component.js';
import { RoomsService } from '../rooms/services/rooms.service';
@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  //providers:[RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor() { }

  ngOnInit(): void {

  };

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Ivan";
    
  }
}
