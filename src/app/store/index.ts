import { ActionReducerMap } from '@ngrx/store';
import { TodoState } from './todo.reducer';

import * as todoReducer from './todo.reducer';

export interface State {
  todoList: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todoList: todoReducer.reducer,
};
