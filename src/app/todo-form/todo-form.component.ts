import { Component } from '@angular/core';
import { Todos } from '../todos';
import { FormControl, FormGroup } from '@angular/forms';
import { TodosService } from '../service/todos.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todos!: Todos[];
  FormTodo = new FormGroup({
    id: new FormControl(''),
   task: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
  });

  constructor(private TodosService:TodosService) {}
  addTask(): void {
    const todo: Todos = {
      id:Date.now(),
      task: this.FormTodo.value.task || "",
      status: this.FormTodo.value.status || "",
    };
    this.TodosService.addTodo(todo);
    this.FormTodo.reset();
    
  }
}
