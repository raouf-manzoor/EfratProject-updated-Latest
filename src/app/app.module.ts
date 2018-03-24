import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SignUpComponentComponent } from './signUp/sign-up-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BookAcarComponent } from './bookAcar/book-acar.component';
import { HomeComponent } from './home/home.component';
const appRoutes:Routes =[
// {path:'home',component:AppComponent},
{path:'signUp',component:SignUpComponentComponent},
{path:'home/signUp',component:SignUpComponentComponent},
{path:'home/signIn',component:SignUpComponentComponent},
{path:'signIn',component:SignInComponent},
{path:'bookAcar',component:BookAcarComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'/home',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponentComponent,
    SignInComponent,
    BookAcarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
