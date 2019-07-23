import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public stringPipes = 'String Pipes';
  public jsonObj = {
    id: 1,
    name: 'John Wick'
  };

  public date = new Date();

  constructor() {}

  ngOnInit() {}
}
