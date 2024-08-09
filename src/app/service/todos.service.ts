import { Injectable } from '@angular/core';
import { Todos } from '../todos';
import { todos } from '../../mocks-todos';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todos[] = todos;
  constructor() {}
  //Methode de stockage des donéees
  getTodos(): Todos[] {
    return this.todos;
  }
  
  addTodo(todo: Todos): void {
    this.todos.push(todo);
  }
  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

 edite(): void {
  this.todos.map((el)=>{
    this.el.id === id ? (                                                                                                                                                                                                                                                                                  el,task) :el
  })
 }

}
