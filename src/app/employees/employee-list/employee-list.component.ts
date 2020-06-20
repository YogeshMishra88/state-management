import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Employee} from '././../../../models/employee.model';
import {AppState} from './../../app.state';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :Observable<Employee[]>;

  constructor(private store:Store<AppState>) { 
    this.employees = store.select('employee');
    console.log(this.employees);
  }

  ngOnInit() {
  }

}
