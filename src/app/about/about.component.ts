import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  todos: any;

  constructor(private router: Router, private _data: DataService) { }

  ngOnInit(): void {
    this._data.todo.subscribe(res => this.todos = res);
  }

  sendMeHome(): void {
    this.router.navigate(['']);
  }

}
