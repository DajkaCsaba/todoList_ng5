import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private todos = new BehaviorSubject<any>(['Enni', 'Inni', 'Lélegezni']);
  todo = this.todos.asObservable();

  constructor() { }

  changeTodo(todo): void{
    this.todos.next(todo);
  }
}
