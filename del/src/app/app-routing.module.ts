import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SectionsComponent } from './sections/sections.component';
import { SubSectionsComponent } from './sub-sections/sub-sections.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard] },
  { path: 'sections', component: SectionsComponent, canActivate: [AuthGuard] },
  { path: 'sub-sections', component: SubSectionsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
