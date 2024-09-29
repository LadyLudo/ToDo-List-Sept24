import { createAction, props } from '@ngrx/store';
import { ToDo } from '../models/todo.model';

export const create = createAction(
  '[ToDo] Create Todo',
  props<{ todo: ToDo }>()
);
export const update = createAction(
  '[ToDo] Update Todo',
  props<{ todo: ToDo; index: number }>()
);
export const remove = createAction(
  '[ToDo] Remove Todo',
  props<{ index: number }>()
);
