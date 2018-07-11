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
import { CanDeactivateGuard } from './servers/edit-server/can-activate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

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
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
    ] },
    // { path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: { message: '404 - Page not found' } },
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