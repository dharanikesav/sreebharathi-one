import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UiCommonModule } from '../ui-common/ui-common.module';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { EventsComponent } from './events/events.component';
import { DonateComponent } from './donate/donate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule,
    RouterModule 
  ],
  declarations: [HomeComponent, ContactComponent, AboutComponent, LoginComponent, ProjectsComponent, EventsComponent, DonateComponent],
  exports: [HomeComponent]
})
export class UiModule { }
