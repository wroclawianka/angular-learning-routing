import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription : Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // creation of the user on initialization
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // update of the user each time it will change
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'],
        this.user.name = params['name']
      }
    )
  }

  ngOnDestroy() {
    // you do not need this unless you create your own observebles (here you hare routes observables)
    this.paramsSubscription.unsubscribe();
  }
}
