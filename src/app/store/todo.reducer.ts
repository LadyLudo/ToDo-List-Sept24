import { Action, createReducer, on } from '@ngrx/store';
import { create, update, remove } from './todo.actions';
import { ToDo } from '../models/todo.model';

export interface TodoState {
  items: ToDo[];
}

export const initialState: TodoState = {
  items: [],
};

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { todo }) => ({
    ...state,
    items: state.items.concat(todo),
  })),
  on(update, (state, { todo, index }) => ({
    ...state,
    items: updateItems(state.items, index, todo),
  })),
  on(remove, (state, { index }) => ({
    ...state,
    items: removeListItem(state.items, index),
  }))
);

function removeListItem(items: ToDo[], index: number): ToDo[] {
  let newItems = [...items];
  newItems.splice(index, 1);
  return newItems;
}

function updateItems(items: ToDo[], index: number, todo: ToDo): ToDo[] {
  let newItems = [...items];
  newItems[index] = todo;
  return newItems;
}

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
