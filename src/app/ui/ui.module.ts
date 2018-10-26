import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UiCommonModule } from '../ui-common/ui-common.module';

@NgModule({
  imports: [
    CommonModule,
    UiCommonModule  
  ],
  declarations: [HomeComponent, ContactComponent, AboutComponent],
  exports: [HomeComponent]
})
export class UiModule { }
