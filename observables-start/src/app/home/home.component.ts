import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  customObservable = new Observable;
  customSubscription: Subscription;

  ngOnInit() {
    // Observable configuration
      this.customObservable = Observable.create((observer: Observer<string> ) => {

      // Observer sends packages and completed state
      setTimeout( () => { observer.next('first package'); }, 1000 );
      setTimeout( () => { observer.next('second package'); }, 2000 );
      setTimeout( () => { observer.complete(); }, 3000 );

    });

    // Subscription to the observable
    this.customSubscription = this.customObservable.subscribe(
      // Reaction to states
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('done!'); }
    );
  }

  ngOnDestroy() {
    // Allways unsubscribe
   this.customSubscription.unsubscribe();
  }

}
