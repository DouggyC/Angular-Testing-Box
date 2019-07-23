import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives-component.html',
  styleUrls: ['./structural-directives-component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public hello = 'hello';
  public isHello = 'hello';
  public name = 'Doug';

  thenBlock = true;
  inlineTrue = false;
  public color = 'red';
  public colors = ['red', 'blue', 'green', 'yellow'];

  constructor() {}

  ngOnInit() {}
}
