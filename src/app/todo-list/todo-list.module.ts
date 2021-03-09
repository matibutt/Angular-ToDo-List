import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TodoListRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    HttpClient
  ]
})
export class TodoListModule {}
