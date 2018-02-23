import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{

    serverStatus: string;
    serverColor: string;
    serverNumber = Math.random();

    constructor() {
        this.serverColor = this.serverNumber > 0.5 ? 'green' : 'red';
        this.serverStatus = this.serverNumber > 0.5 ? 'online' : 'offline';
    }

}