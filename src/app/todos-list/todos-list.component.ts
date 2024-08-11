import { TodosService } from '../service/todos.service';
import { todos } from './../../mocks-todos';
import { Todos } from './../todos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit {
  todos!: Todos[];

  
  constructor(private TodosService: TodosService) {}
  ngOnInit(): void {
    // this.todos = this.TodosService.getTodos();
    this.getTodos();
  }

  getTodos() {
    this.todos = this.TodosService.getTodos();
  }


  removTask(index: number): void {
    this.TodosService.deleteTodo(index);
    this.getTodos();
    console.log(index);
  }
 
  // updatTask(id:number) {
  //   this.TodosService.editeTodo(id)
  //   console.log(id);
    
  // }
  isEditing: boolean = false;
  originalData = {
    task: 'Titre initial',
    status: 'Description initiale'
  };
  updatedData = { ...this.originalData };

  startEditing() {
    this.isEditing = true;
  }

  saveChanges() {
    this.originalData = { ...this.updatedData };
    this.isEditing = false;
  }

  cancelEditing() {
    this.updatedData = { ...this.originalData };
    this.isEditing = false;
  }

}
