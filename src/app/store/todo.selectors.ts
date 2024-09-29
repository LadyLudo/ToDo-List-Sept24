import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

import { State } from './index';

export const getRootState = (state: State) => state.todoList;

export const getTodoItems = createSelector(
  getRootState,
  (state: TodoState) => state.items
);
