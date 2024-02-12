import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent {

  id: number = 0;
  id$ = this.router.paramMap.pipe(
    map((params) => params.get('roomid'))
  );

  constructor(private router: ActivatedRoute) {
  }
  ngOnInit(): void {
    // this.id = this.router.snapshot.params['roomid'];
    // this.id$ =
    // this.router.paramMap.subscribe((params) => {params.get('roomid')});
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomid']
    // })
  }
}
