import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { ToDo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  @Input() title: string;
  @Input() content: string;
  @Input() checked: boolean;
  @Input() index: number;

  public todo: ToDo;
  public isEditTodoModalOpen: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todo = {
      title: this.title,
      content: this.content,
      checked: this.checked,
    };
  }

  toggleChecked(value: boolean) {
    this.todo.checked = value;
    this.todoService.updateTodo(this.todo, this.index);
  }

  deleteItem() {
    this.modal.dismiss(null, 'delete');
    this.todoService.deleteTodo(this.index);
  }

  setEditModalOpen(isOpen: boolean) {
    this.isEditTodoModalOpen = isOpen;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  save() {
    this.modal.dismiss(this.todo, 'save');
  }

  onModalDismiss(event: Event) {
    this.isEditTodoModalOpen = false;
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'save') {
      this.todoService.updateTodo(this.todo, this.index);
    }
  }
}
