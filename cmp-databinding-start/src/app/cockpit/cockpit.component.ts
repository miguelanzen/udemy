import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';

  @Output() serverAdded = new EventEmitter<{serverName: string, serverType: string, serverContent: string}>();
  @Output() blueprintAdded = new EventEmitter<{serverName: string, serverType: string, serverContent: string}>();
  onAddServer() {
    this.serverAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      serverType: 'server'
    });
  }

  onAddBlueprint() {
    this.blueprintAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      serverType: 'blueprint'
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
