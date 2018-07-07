import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(["/servers"]); works the same as: this.router.navigate(["servers"]);
    // because navigate method doesn't know on which router you already are. To inform mathod use property relativeTo: 
    // this.router.navigate(["servers"], {relativeTo: this.route}); (this method cause an error by purpose)
    // ActivatedRoute injects activated route - see constructor and imports above
    console.log("Nothing should happen by purpose");
  }

}
