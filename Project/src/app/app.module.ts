import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'ng-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServicesHomepageComponent } from './services-homepage/services-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderComponent,
    AboutUsComponent,
    TestimonialComponent,
    ServicesHomepageComponent],
  imports: [
    LottieAnimationViewModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
