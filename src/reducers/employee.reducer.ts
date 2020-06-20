import {Action} from '@ngrx/store';
import {Employee} from './../models/employee.model';
import * as EmployeeActions from './../actions/employee.action';

const initialState : Employee[] = [{
    name :'John Anderson',
    email:'john.anderson@gmail.com',
    phone:1234567895,
    zipcode:789456
},
{
    name :'Garry Pop',
    email:'garry.pop@gmail.com',
    phone:8888888888,
    zipcode:456987
},
{
    name :'Peter England',
    email:'peter.england@yahoo.com',
    phone:3698521475,
    zipcode:968574
}]

export function employeeReducer(state:Employee[]=initialState,action:EmployeeActions.Actions){
    switch(action.type){
        case EmployeeActions.ADD_EMPLOYEE:
            return [...state,action.payload];
        default:
            return state;
    }
}