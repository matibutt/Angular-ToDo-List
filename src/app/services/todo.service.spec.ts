import { TestBed } from '@angular/core/testing';
import { TodoListComponent } from '../todo-list/todo-list.component';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

});
