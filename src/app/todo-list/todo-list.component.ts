import { TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo: any;
  showloading = true;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((data: []) => {
      this.showloading = false;
      if (data && data.length > 0) {
        this.todo = data;
      } else {
        this.todo = [];
      }
    });
  }
  toggleDone(id: number) {
    this.todo.map((v: any, i: any) => {
      if (i === id) {
        v.completed = !v.completed;

        return v;
      }
    });
  }

  deleteTodo(id: number) {
    this.todo = this.todo.filter((v: any, i: any) => i !== id);
  }
}
