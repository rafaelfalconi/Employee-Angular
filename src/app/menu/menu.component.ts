import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
    styles: [`mat-toolbar {justify-content: space-between;}`],
    templateUrl: `menu.component.html`
})
export class MenuComponent {
    static URL = 'Menu';
    constructor(private router: Router) {

    }
    category() {
        this.router.navigate([MenuComponent.URL,CategoryComponent.URL]);
    }

    employee(){
        this.router.navigate([MenuComponent.URL,EmployeeComponent.URL])
    }
}