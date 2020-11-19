import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-homepage',
  templateUrl: './services-homepage.component.html',
  styleUrls: ['./services-homepage.component.css']
})
export class ServicesHomepageComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;


  constructor() {
    this.lottieConfig = {
      path: 'https://assets4.lottiefiles.com/packages/lf20_w22Uo9.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }
  handleAnimation(anim: any) {
    this.anim = anim;
  }
  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
  ngOnInit(): void {
  }

}
