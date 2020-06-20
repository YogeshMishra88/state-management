import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Employee} from '././../../../models/employee.model';
import {AppState} from './../../app.state';
import * as EmployeeActions from './../../../actions/employee.action'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees :Observable<Employee[]>;


  userForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email : new FormControl(),
    phone : new FormControl(),
    zipcode : new FormControl()
  })

  constructor(private store:Store<AppState>) { 
    this.employees = store.select('employee');
  }

  ngOnInit() {
  }

  openPopup():void{
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  }

  closePopup():void{
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  submitForm():void{
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    this.store.dispatch(new EmployeeActions.AddEmployee({
      name:this.userForm.value.name,
      email:this.userForm.value.email,
      phone:this.userForm.value.phone,
      zipcode:this.userForm.value.zipcode
    }));
  }

}
