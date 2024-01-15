import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms.js';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 500,
    photos: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
    checkingTime: new Date('15-January-2024'),
    chekoutTime: new Date('16-January-2024')
  },
{
  roomNumber: 2,
  roomType: 'Deluxe Room',
  amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
  price: 1000,
  photos: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
  checkingTime: new Date('15-January-2024'),
  chekoutTime: new Date('16-January-2024')
},
{
  roomNumber: 3,
  roomType: 'Private Suite',
  amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
  price: 1500,
  photos: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
  checkingTime: new Date('15-January-2024'),
  chekoutTime: new Date('16-January-2024')
}
]

  constructor() {
  }

  ngOnInit(): void {
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
