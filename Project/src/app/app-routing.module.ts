import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutUsComponent } from './about-us/about-us.component';


import { MainComponent } from './main/main.component';


import { SignUpComponent } from './sign-up/sign-up.component';
import { LabResultsComponent } from './lab-results/lab-results.component'




const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'lab-results', component: LabResultsComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
