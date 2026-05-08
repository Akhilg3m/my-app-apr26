import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { VehicleService } from './vehicle.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthGuard], component: DashboardComponent, children:[
    {path:'home', component:HomeComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'directives', component: DirectivesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'users', component:UsersComponent},
    {path:'vehicles', component:VehicleComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'vehicle-details/:id', component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'create-user', component:CreateUserComponent}

  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
