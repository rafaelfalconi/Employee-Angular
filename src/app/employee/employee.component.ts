import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Category } from '../category/category.model';
import { Employee } from './employee.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
    categoria: Category = { id: "1", rank: 1, title: "aa" };
    employees: Employee[] = [
        { Id: "1", Surname: "employeess", Entry: "Jan 2017", Active: true, Categoria: this.categoria, Area: "area" },
        { Id: "2", Surname: "employee", Entry: "Jan 2017", Active: true, Categoria: this.categoria, Area: "area" }
    ];
    displayedColumns = [];
    dataSource: MatTableDataSource<Employee>;
    static URL = 'Employees';
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(public dialog: MatDialog) {

    }
    ngOnInit(): void {

        this.fillTable();

    }
    fillTable() {

        this.displayedColumns = ['Id', 'Surname', 'Entry', 'Active', 'Categoria', 'Area'];
        this.dataSource = new MatTableDataSource(this.employees);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }
}