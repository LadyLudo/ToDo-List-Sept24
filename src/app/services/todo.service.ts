import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { Observable } from 'rxjs';
import { ToDo } from '../models/todo.model';
import { getTodoItems } from '../store/todo.selectors';
import { create, remove, update } from '../store/todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private store: Store<State>) {}

  getTodoList(): Observable<ToDo[]> {
    return this.store.select(getTodoItems);
  }

  addTodo(todo: ToDo) {
    this.store.dispatch(create({ todo }));
  }

  updateTodo(todo: ToDo, index: number) {
    this.store.dispatch(update({ todo, index }));
  }

  deleteTodo(index: number) {
    this.store.dispatch(remove({ index }));
  }
}
