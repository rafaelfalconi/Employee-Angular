import { Injectable } from '@angular/core';

import { Category } from './category.model';
import { HttpService } from '../core/http.service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CategoryService {
    static END_POINT = '/categories';

    constructor(private httpService: HttpService, public snackBar: MatSnackBar) {
    }

    readObservable(id: String): Observable<Category> {
        return this.httpService.get(CategoryService.END_POINT + '/' + id);
    }

    createObservable(category: Category): Observable<boolean> {
        return this.httpService.post(CategoryService.END_POINT, category).map(
            data => {
                this.successful();
                return data;
            }
        );
    }

    putObservable(category: Category): Observable<boolean> {
        return this.httpService.put(CategoryService.END_POINT + '/' + category.id, category).map(
            data => {
                this.successful();
                return data;
            }
        );
    }

    readAll(): Observable<Category[]> {
        return this.httpService.get(CategoryService.END_POINT);
    }

    private successful() {
        this.snackBar.open('Successful', '', {
            duration: 2000
        });
    }

}
