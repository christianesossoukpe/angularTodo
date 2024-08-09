import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppressionService {
 todo?:string
 newTodo?:string;
 confirmation:string ="Voulez-vous vraiment supprimer cette tâche ?";
  constructor() {}

  // deleteTodo(todoId:number){
  
  //   if (this.confirmation) {
  //      return this.todo.splice(todoId, 1); 
  //     }
  //   }
}
