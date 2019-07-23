import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives-component';
import { InteractionsComponent } from './components/interactions/interactions.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { AnimationsPlaygroundComponent } from './components/animations-playground/animations-playground.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetailsComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'animations', component: AnimationsPlaygroundComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const RoutingComponents = [
  PipesComponent,
  EmployeeDetailComponent,
  AnimationsPlaygroundComponent,
  InteractionsComponent,
  StructuralDirectivesComponent,
  DepartmentListComponent,
  DepartmentDetailsComponent,
  DepartmentContactComponent,
  DepartmentOverviewComponent,
  EmployeeListComponent,
  NotFoundComponent
];
