import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { authReceptionGuard } from './shared/guards/auth-reception.guard';
import { authBoabaGuard } from './shared/guards/auth-boaba.guard';

const routes: Routes = [


  //
  {path: '', canActivate :[authGuard] ,loadComponent: () =>
    import('./Layout/nav-blank/nav-blank.component')
    .then((m) => m.NavBlankComponent)
  ,children: [

    {path : '' , redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home' ,  loadComponent: () => import('./components/home/home.component')
    .then((m) => m.HomeComponent) , title: 'Home'} ,
    {path: 'Bookappointments' , loadComponent: () => import('./components/bookappointments/bookappointments.component')
      .then((m) => m.BookappointmentsComponent) , title: 'Bookappointments'} ,
      {path: 'print' , loadComponent: () => import('./components/print/print.component')
        .then((m) => m.PrintComponent) , title: 'Print'} ,
      // {path: 'visitorsys' ,   loadComponent: () => import('./components/visitorsys/visitorsys.component')
      //   .then((m) => m.VisitorsysComponent) , title: 'Visitorsys'} ,
      // {path: 'reception' , loadComponent: () => import('./components/reception/reception.component')
      //   .then((m) => m.ReceptionComponent) , title: 'Reception'} ,

      {path: 'seting' , loadComponent: () => import('./components/navbar-seting/navbar-seting.component')
        .then((m) => m.NavbarSetingComponent) , title: 'Seting'} ,


    ]

  } ,


  // ************************************************************* Parmtion
  {path: 'reception' , canActivate :[authReceptionGuard] , loadComponent: () => import('./components/reception/reception.component')
    .then((m) => m.ReceptionComponent) , title: 'Reception'} ,


// ************************************************************************ Babab

{path: 'visitorsys' ,  canActivate :[authBoabaGuard] , loadComponent: () => import('./components/visitorsys/visitorsys.component')
  .then((m) => m.VisitorsysComponent) , title: 'Visitorsys'} ,

// **************************************************** NAV Bookappointments



{path: '', canActivate :[authGuard],  loadComponent: () =>
  import('./Layout/nav-bookappointments/nav-bookappointments.component')
  .then((m) => m.NavBookappointmentsComponent)
,children: [


  {path: 'guest' , loadComponent: () => import('./components/guest/guest.component')
    .then((m) => m.GuestComponent) , title: 'Guest'} ,

  {path : '' , redirectTo: 'agency' , pathMatch: 'full'},
  {path: 'agency' , loadComponent: () => import('./components/agency/agency.component')
    .then((m) => m.AgencyComponent) , title: 'Agency'} ,


      {path: 'adjective' , loadComponent: () => import('./components/adjective/adjective.component')
        .then((m) => m.AdjectiveComponent) , title: 'Adjective'} ,

        {path: 'host' , loadComponent: () => import('./components/host/host.component')
          .then((m) => m.HostComponent) , title: 'Host'} ,




]},

// **************************************************** NAV seting


{path: '',  canActivate :[authGuard], loadComponent: () =>
  import('./Layout/nav-seting/nav-seting.component')
  .then((m) => m.NavSetingComponent)
,children: [

  {path : '' , redirectTo: 'users' , pathMatch: 'full'},
  {path: 'users' , loadComponent: () => import('./components/Admin/users/users.component')
    .then((m) => m.UsersComponent) , title: 'Users'} ,
  {path: 'permission' , loadComponent: () => import('./components/Admin/permission/permission.component')
    .then((m) => m.PermissionComponent) , title: 'Permission'} ,
  {path: 'Changepassword' , loadComponent: () => import('./components/Admin/changepassword/changepassword.component')
    .then((m) => m.ChangepasswordComponent) , title: 'Changepassword'} ,






]},


  // ***************************************** Login

  {path : '', loadComponent: () => import('./Layout/nav-login/nav-login.component')
    .then((m) => m.NavLoginComponent) ,
    children: [
       {path: '' , redirectTo: 'login' , pathMatch: 'full'},

      {path : 'login', loadComponent: () => import('./components/login/login.component')

        .then((m) => m.LoginComponent)
        , title: 'Login'
      }

    ]

  },


  {path: '**' , loadComponent: () => import('./components/notfound/notfound.component')
    .then((m) => m.NotfoundComponent), title: 'Not Found'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
