import { Component, OnInit, ViewChild } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  List$: Observable<ToDo[]> | undefined;
  newTodo: ToDo = new ToDo();
  isNewTodoModalOpen: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.List$ = this.todoService.getTodoList();
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new ToDo();
  }

  setModalOpen(isOpen: boolean) {
    this.isNewTodoModalOpen = isOpen;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  save() {
    this.modal.dismiss(null, 'save');
  }

  onModalDismiss(event: Event) {
    this.setModalOpen(false);
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'save') {
      this.addTodo();
    }
  }
}
