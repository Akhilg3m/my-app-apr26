import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsersComponent } from './users/users.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { PricePipe } from './price.pipe';
import { CapitalDirective } from './capital.directive';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    UsersComponent,
    VehicleComponent,
    CreateVehicleComponent,
    VehicleDetailsComponent,
    CreateUserComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    ItemsComponent,
    NavComponent,
    CartComponent,
    PricePipe,
    CapitalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ContactUsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
