import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {path:'', component: TodoListComponent},
    {path:'login', component: LoginComponent},
    /* auth routes */

    {path:'', component:AuthComponent, loadChildren:()=> import('./auth/auth.component').then(m => m.AuthComponent)},

    /* auth routes */
    {path:'**', component: PagenotfoundComponent },
    


];
