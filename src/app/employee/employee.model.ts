import { Category } from '../category/category.model';

export interface Employee {
    Id: String;
    Surname: String;
    Entry: String;
    Active: Boolean;
    Categoria:Category;
    Area:String;
}