import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component.js';
import { LoggerService } from './logger.service.js';
import { LocalStorageToken } from './localstorage.token.js';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: Storage) {
  }

  ngOnInit(): void {
    this.loggerService?.Log('AppComponent.ngOnInt()')
    this.name.nativeElement.innerText = "Hilton Hotel";

    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', {read:ViewContainerRef}) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
};
