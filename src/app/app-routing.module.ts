import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      // colon is saying Angular that is dynamic part of the path
      { path: ':id/:name', component: UserComponent },
    ] },
    { path: 'servers', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard], // AuthGuard is able to protect both single route and child routes
    component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },
    ] },
    { path: 'not-found', component: PageNotFoundComponent},
    // ** wildcard - catch all paths that you do not know
    { path: '**', redirectTo: 'not-found'}
  ];
@NgModule({
    // you do not have to declare modules, as are already delacred in app.module
    
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    // to outsource routes use export, we have to add our RouterModule back 
    exports: [RouterModule]

})
export class AppRoutingModule{
    
}