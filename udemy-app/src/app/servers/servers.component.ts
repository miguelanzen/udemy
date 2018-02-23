import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName: string;
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() { }

  ngOnInit() {
  }

  onServerCreated(event) {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    // this.serverName = (<HTMLInputElement>event.target).value;
  }

}
