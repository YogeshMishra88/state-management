import {Employee} from '../models/employee.model';

export interface AppState{
    readonly employee:Employee[];
}