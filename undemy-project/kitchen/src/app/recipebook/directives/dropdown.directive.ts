import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})
export class AppDropdownDirective{

    constructor(private dropdown: ElementRef) {}

    @HostBinding('class.open') open= false;

    @HostListener('click') toggleDropdown() {
        this.open = !this.open;
    }

}
