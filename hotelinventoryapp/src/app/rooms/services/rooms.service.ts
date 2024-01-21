import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms.js';
import { Observable, of } from 'rxjs'; 
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service.js';
import { AppConfig } from '../../AppConfig/appconfig.interface.js';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
      checkingTime: new Date('15-January-2024'),
      chekoutTime: new Date('16-January-2024'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
      checkingTime: new Date('15-January-2024'),
      chekoutTime: new Date('16-January-2024'),
      rating: 3.44456,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
      checkingTime: new Date('15-January-2024'),
      chekoutTime: new Date('16-January-2024'),
      rating: 2.6
    }];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig ) { 
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');
  
  };
  getRooms(): Observable<RoomList[]> {
    return of(this.roomList); 
  }
};
