import { Category } from '../category/category.model';

export interface Employee {
    id: String;
    surname: String;
    entry: String;
    active: Boolean;
    categorydto:Category;
    area:String;
}