import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  u1 = false;
  u2 = false;
  usersSubscription: Subscription;

  constructor ( private usersService: UsersService ) {}

  ngOnInit() {
    this.usersSubscription = this.usersService.activatedUser.subscribe(
      (id: number) => {
        if ( id === 1 ) {
          this.u1 = true;
        } else if ( id === 2 ) {
          this.u2 = true;
        }
       }
    );
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
