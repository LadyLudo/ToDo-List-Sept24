import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockTodoService {
  constructor() {}

  getTodoList(): Observable<ToDo[]> {
    return of([]);
  }

  addTodo(todo: ToDo) {}

  updateTodo(todo: ToDo, index: number) {}

  deleteTodo(index: number) {}
}
