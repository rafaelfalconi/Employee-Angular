import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Category } from '../category/category.model';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeCreationEditDialogComponent } from './employee-creation-edit-dialog.component';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

    employees: Employee[];
    displayedColumns = ['Id', 'Surname',  'Active', 'Categoria', 'Area', 'Opciones'];
    dataSource: MatTableDataSource<Employee>;
    static URL = 'Employees';
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(public dialog: MatDialog, private employeeService: EmployeeService) {

    }
    ngOnInit(): void {
        this.synchronize();
    }
    synchronize() {
        this.employeeService.readAll().subscribe(
            data => {
                this.dataSource = new MatTableDataSource<Employee>(data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        );
    }
    edit(employee: Employee) {
        this.employeeService.readObservable(employee.id).subscribe(
            data => {
                const dialogRef = this.dialog.open(EmployeeCreationEditDialogComponent);
                dialogRef.componentInstance.employee = data;
                dialogRef.componentInstance.edit = true;
                dialogRef.afterClosed().subscribe(
                    result => this.synchronize()
                );
            }
        );
    }
    create() {
        const dialogRef = this.dialog.open(EmployeeCreationEditDialogComponent);
        dialogRef.componentInstance.edit = false;
        dialogRef.afterClosed().subscribe(
            result => this.synchronize()
        );
    }
}