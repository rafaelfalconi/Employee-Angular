import { Injectable } from '@angular/core';

import { Employee } from './employee.model';
import { HttpService } from '../core/http.service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class EmployeeService {
    static END_POINT = '/employees';

    constructor(private httpService: HttpService, public snackBar: MatSnackBar) {
    }

    readObservable(id: String): Observable<Employee> {
        return this.httpService.authToken().get(EmployeeService.END_POINT + '/' + id);
    }

    createObservable(employee: Employee): Observable<boolean> {
        return this.httpService.authToken().post(EmployeeService.END_POINT, employee).map(
            data => {
                this.successful();
                return data;
            }
        );
    }

    putObservable(employee: Employee): Observable<boolean> {
        return this.httpService.authToken().put(EmployeeService.END_POINT + '/' + employee.id, employee).map(
            data => {
                this.successful();
                return data;
            }
        );
    }

    readAll(): Observable<Employee[]> {
        return this.httpService.authToken().get(EmployeeService.END_POINT);
    }

    private successful() {
        this.snackBar.open('Successful', '', {
            duration: 2000
        });
    }

}
