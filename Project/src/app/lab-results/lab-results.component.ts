import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.css']
})



export class LabResultsComponent implements OnInit {

  names = ["Walid", "Abed", "Mohamad", "Afif", "Yasmina", "Reem", "Rita"]

  family = ["Jomaa", "Boubou", "Masri", "Yassine", "Ali", "Natour", "Najim"]

  pcr = ["Negative", "Positive", "Positive", "Positive", "Negative", "Negative", "Positive"]

  temp = [36, 37, 37.5, 38, 36, 37, 39]
  constructor() {

  }

  ngOnInit(): void {

  }

}
