import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { CategoryComponent } from './category/category.component';
import { EmployeeComponent } from './employee/employee.component';
import { CategoryCreationEditDialogComponent } from './category/category-creation-edit-dialog.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: MenuComponent.URL },
    { path: MenuComponent.URL, component: MenuComponent },
    {
        path: MenuComponent.URL, component: MenuComponent,
        children: [
            { path: CategoryComponent.URL, component: CategoryComponent },
            { path: EmployeeComponent.URL, component: EmployeeComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static COMPONENTS = [
        CategoryComponent,
        MenuComponent
    ]
    static COMPONENT_FACTORY = [
        CategoryCreationEditDialogComponent
    ]
}