import { Injectable } from '@angular/core';
import { ActionCounterService } from './action-counter.service';

@Injectable()
export class UsersService {

    constructor( private actionCounter: ActionCounterService ) {}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    toActiveCounter = this.actionCounter.inactiveToActive;
    toInactiveCounter = this.actionCounter.activeToInactive;

    setToActive(id) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.actionCounter.countAction('inactiveToActive');
        this.toActiveCounter = this.actionCounter.inactiveToActive;
    }

    setToInactive(id) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.actionCounter.countAction('activeToInactive');
        this.toInactiveCounter = this.actionCounter.activeToInactive;
    }

}
