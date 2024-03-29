import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Room, RoomList } from '../rooms.js';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[] | null= [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
    }

  ngOnInit(): void {
  };

  selectRoom(room: RoomList) {
    console.log(room);
 };

 ngOnDestroy(): void {
  console.log('on destroy is called');
}
 
}
