import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Category } from './category.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryService } from './category.service';
import { CategoryCreationEditDialogComponent } from './category-creation-edit-dialog.component';
@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
    categories: Category[];
    displayedColumns = ['id', 'rank', 'title', 'opciones'];
    dataSource: MatTableDataSource<Category>;
    static URL = 'Categories';
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(public dialog: MatDialog, private categoryService: CategoryService) {

    }
    ngOnInit(): void {
        this.synchronize();

    }
    edit(category: Category) {
        this.categoryService.readObservable(category.id).subscribe(
            data => {
                const dialogRef = this.dialog.open(CategoryCreationEditDialogComponent);
                dialogRef.componentInstance.category = data;
                dialogRef.componentInstance.edit = true;
                dialogRef.afterClosed().subscribe(
                    result => this.synchronize()
                );
            }
        );
    }
    synchronize() {
        this.categoryService.readAll().subscribe(
            data => {
                this.dataSource = new MatTableDataSource<Category>(data);
                this.dataSource.sort = this.sort
                this.dataSource.paginator = this.paginator;
            }
        )
    }
    create() {
        const dialogRef = this.dialog.open(CategoryCreationEditDialogComponent);
        dialogRef.componentInstance.edit = false;
        dialogRef.afterClosed().subscribe(
            result => this.synchronize()
        );
    }

}

