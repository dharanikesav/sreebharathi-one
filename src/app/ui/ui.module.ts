import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UiCommonModule } from '../ui-common/ui-common.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule  
  ],
  declarations: [HomeComponent, ContactComponent, AboutComponent, LoginComponent],
  exports: [HomeComponent]
})
export class UiModule { }
