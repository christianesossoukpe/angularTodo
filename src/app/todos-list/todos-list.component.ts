import { Component } from '@angular/core';
import { SuppressionService } from '../service/suppression.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {
  
constructor(private supprimer:SuppressionService){}

}
