import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department with id = {{ departmentId }}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrev()">Prev</button>
      <button (click)="goNext()">Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrev() {
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  // Pass optional parameters
  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', { id: selectedId }]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route
    });
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
