import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Usuario } from 'src/app/model/Usuario';

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
export class HomeModule implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}