import { Inject, Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms.js';
import { Observable, of, shareReplay } from 'rxjs'; 
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service.js';
import { AppConfig } from '../../AppConfig/appconfig.interface.js';
import { HttpClient, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http/index.js';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [];
  headers = new HttpHeaders({'token': '1234564535sdg'});
  getRooms$ = this.http.get<RoomList[]>('/api/rooms', {
    headers: this.headers
  }).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient ) { 
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  
  };
 getRooms() {
  return this.http.get<RoomList[]>('/api/rooms');
 };

 addRoom(room :RoomList) {
  return this.http.post<RoomList[]>('/api/rooms', room, {
    headers:this.headers,
  });
 }

 editRoom(room: RoomList) {
  return this.http.put<RoomList[]>(`/api/rooms${room.roomNumber}`, room);
 };

 deleteRoom (id: string) {
  return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
 };

 getPhotos () {
  const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
    reportProgress: true,
  });
  return this.http.request(request);
 }
};
