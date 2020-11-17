import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title = "About Us"
  constructor() { }
  values = '';

  onKey(event: any) { // without type info
    this.values = ''
    this.values += event.target.value;
  }
  ngOnInit(): void {
  }

}
