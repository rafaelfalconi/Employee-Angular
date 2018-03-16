import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
    templateUrl: 'category-creation-edit-dialog.component.html',
    styles: [`.mat-dialog-content {
        display: flex;
        flex-direction: column;
    }`]
})
export class CategoryCreationEditDialogComponent implements OnInit {
    edit: boolean;
    category: Category;

    constructor(public dialogRef: MatDialogRef<CategoryCreationEditDialogComponent>,
        private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        if (!this.category) {
            this.category = { id: undefined, title: '',rank: 0};
        }
    }

    create(): void {
        this.categoryService.createObservable(this.category).subscribe(
            data => this.dialogRef.close()
        );
    }

    save(): void {
        this.categoryService.putObservable(this.category).subscribe(
            data => this.dialogRef.close()
        );
    }
}
