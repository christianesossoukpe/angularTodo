import { Component } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todos } from '../todos';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todos!: Todos[];
  FormTodo = new FormGroup({
    id: new FormControl(''),
   task: new FormControl(''),
    status: new FormControl(''),
  });

  constructor(private TodosService: TodosService) {}
  addTask(): void {
    const todo: Todos = {
      id:Date.now(),
      task: this.FormTodo.value.task || "",
      status: 'En cours',
    };
    this.TodosService.addTodo(todo);
  }
}
