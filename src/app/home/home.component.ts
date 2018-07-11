import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getLoggedIn();
    console.log(this.loggedIn);
  }

  onLoadServers(){
    // complex calculation
    this.router.navigate(['/servers']);
    // ['/servers', ...] - elements of your path
  }

  onLoadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  onLogin() {
      this.authService.login();
      this.getLoggedIn();
  }

  onLogout() {
      this.authService.logout();
      this.getLoggedIn();
  }

  getLoggedIn() : void {
    this.authService.getLoggedIn()
      .subscribe(
        loggedIn => this.loggedIn = loggedIn);
  }
}
