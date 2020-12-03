import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  names = ["Walid", "Abed", "Mohamad", "Afif", "Yasmina", "Reem", "Rita"]

  family = ["Jomaa", "Boubou", "Masri", "Yassine", "Ali", "Natour", "Najim"]

  constructor() { }

  ngOnInit(): void {
  }

}
