import { todos } from './../../mocks-todos';
import { Todos } from './../todos';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit {
  todos!: Todos[];
  FormTodo = new FormGroup({
    id: new FormControl(''),
   task: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),
  });
  constructor(private TodosService: TodosService) {}
  ngOnInit(): void {
   this.getTodos();
  }
  getTodos() {
    this.todos = this.TodosService.getTodos();
  }

  removTask(index: number): void {
    this.TodosService.deleteTodo(index);
    console.log(index);
    this.getTodos();
  }

  updateTodo(): void{
    this.FormTodo.patchValue({
      task:"",
     status: "",
    })
      }
    
}
