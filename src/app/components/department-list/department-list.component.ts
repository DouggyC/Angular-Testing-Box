import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li
        (click)="onSelect(d)"
        [class.selected]="isSelected(d)"
        *ngFor="let d of departments"
      >
        <span>{{ d.id }}</span
        >{{ d.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  // [routerLink]="['/departments', d.id]"

  public selectedId;

  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'Express' },
    { id: 5, name: 'Bootstrap' }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(d) {
    // this.router.navigate(['/departments', d.id]);
    this.router.navigate([d.id], { relativeTo: this.route });
  }

  isSelected(d) {
    return d.id === this.selectedId;
  }
}
