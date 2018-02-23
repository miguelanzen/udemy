export class ActionCounterService {

    activeToInactive = 0;
    inactiveToActive = 0;

    countAction(way) {
        if (way === 'activeToInactive') {
            this.activeToInactive++;
        } else {
            this.inactiveToActive++;
        }

    }
}
