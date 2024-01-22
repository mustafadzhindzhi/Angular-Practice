import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms.js';
import { Observable, of } from 'rxjs'; 
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service.js';
import { AppConfig } from '../../AppConfig/appconfig.interface.js';
import { HttpClient } from '@angular/common/http/index.js';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient ) { 
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  
  };
 getRooms() {
  return this.http.get('/api/rooms');
 }
};
