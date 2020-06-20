import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Employee} from './../models/employee.model';


export const ADD_EMPLOYEE = '[EMPLOYEE] ADD';
export const DELETE_EMPLOYEE = '[EMPLOYEE] DELETE';

export class AddEmployee implements Action{
    readonly type = ADD_EMPLOYEE;

    constructor(public payload:Employee){}
}

export class DeleteEmployee implements Action{
    readonly type = DELETE_EMPLOYEE;

    constructor(public payload:number){}
}

export type Actions = AddEmployee | DeleteEmployee;