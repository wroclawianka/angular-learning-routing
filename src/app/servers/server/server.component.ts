import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.queryParams['id'];
    // this.server = this.serversService.getServer(id);
    // this.route
    //   .queryParams
    //   .subscribe(params => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   });

    // we will use server resolver for commented actions:
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
        // name in bracker has to match name in app-routing
      }
    );
  }

  onEdit(){
    // this.router.navigate(['/servers', this.server.id, 'edit']);
    // relative route:
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
