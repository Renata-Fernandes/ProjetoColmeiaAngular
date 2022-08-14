import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeRouting,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class HomeModule { }