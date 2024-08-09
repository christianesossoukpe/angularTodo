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
    this.todos = this.TodosService.getTodos();
  }

}
