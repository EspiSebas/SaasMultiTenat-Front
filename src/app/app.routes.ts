import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login/login.component';
import { RegisterFormComponent } from './features/register/components/register-form/register-form.component';
import { DashboardComponent } from './features/home/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ListComponentProduct } from './features/products/components/list/list.component';
import { ListComponentCategories } from './features/categories/components/list/list-categories.component';
import { ListHistorialSaleComponent } from './features/historial/components/list-historial-sale/list-historial-sale.component';
export const routes: Routes = [
    { path: '', redirectTo: "login", pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', component: ListComponentProduct },
    { path: 'historialSales', component: ListHistorialSaleComponent},
    
    { path: 'categories', component: ListComponentCategories },
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
