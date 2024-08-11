import { Injectable } from '@angular/core';
import { Todos } from '../todos';
import { todos } from '../../mocks-todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
todos:Todos[] = todos
  constructor() { }
    //Methode de stockage des donéees
    getTodos(): Todos[] {
      return this.todos;
    }

    addTodo(todo:Todos): void{
      
      this.todos.push(todo);
  
    }

    deleteTodo(index:number): void{
      // this.todos.filter((todo) => todo.id !== id)
      this.todos.splice(index,1)
    }
    
    // editeTodo(id:number): void {
    //   this.todos.map((todo) => todo.id === id)
    // }

}
