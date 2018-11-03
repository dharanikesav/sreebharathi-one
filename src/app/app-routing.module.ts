import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';
import { LoginComponent } from './ui/login/login.component';
import { ProjectsComponent } from './ui/projects/projects.component';
import { EventsComponent } from './ui/events/events.component';
import { DonateComponent } from './ui/donate/donate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'about-us',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
