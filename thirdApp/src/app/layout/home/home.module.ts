import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { UsersListModule } from '../users-list/users-list.module';
import { MessagesModule } from '../messages/messages.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    UsersListModule,
    MessagesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
