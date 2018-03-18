import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from './employee.model';
import { Category } from '../category/category.model'
import { EmployeeService } from './employee.service';

@Component({
    templateUrl: 'employee-creation-edit-dialog.component.html',
    styles: [`.mat-dialog-content {
        display: flex;
        flex-direction: column;
    }`]
})
export class EmployeeCreationEditDialogComponent implements OnInit {
    edit: boolean;
    employee: Employee;
    categoria: Category = { id: '', rank: 1, title: '' };

    constructor(public dialogRef: MatDialogRef<EmployeeCreationEditDialogComponent>,
        private employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        console.log(this.employee);
        if (!this.employee) {
            this.employee = { id: undefined, surname: '', entry: '', active: true, categorydto: this.categoria, area: '' };
        }
    }

    create(): void {
        this.employeeService.createObservable(this.employee).subscribe(
            data => this.dialogRef.close()
        );
    }

    save(): void {
        this.employeeService.putObservable(this.employee).subscribe(
            data => this.dialogRef.close()
        );
    }
}
