import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Category } from './category.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
    categories: Category[] = [
        { id: "1", rank: 1, title: "aa" },
        { id: "2", rank: 2, title: "bb" },
        { id: "3", rank: 3, title: "cc" },
        { id: "4", rank: 4, title: "aa" },
        { id: "5", rank: 5, title: "bb" },
        { id: "6", rank: 6, title: "cc" }
    ];
    displayedColumns = [];
    dataSource: MatTableDataSource<Category>;
    static URL = 'Categories';
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(public dialog: MatDialog) {

    }
    ngOnInit(): void {
        this.fillTable();
        this.dataSource = new MatTableDataSource<Category>(this.categories);

    }
    fillTable() {
        this.displayedColumns = ['id', 'rank', 'title'];
        this.dataSource = new MatTableDataSource(this.categories);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

    }

}

