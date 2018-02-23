import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Test server', content: 'This is a content'},
    {type: 'blueprint', name: 'Test server 2', content: 'This is a content 2'}
  ];

  onServerAdded(eventData: {serverName: string, serverType: string, serverContent: string}) {
    this.serverElements.push({
      type: eventData.serverType,
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

  onBlueprintAdded(eventData: {serverName: string, serverType: string, serverContent: string}) {
    this.serverElements.push({
      type: eventData.serverType,
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

}
