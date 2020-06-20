import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { PageNotFoundComponent} from './employees/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:EmployeeListComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
