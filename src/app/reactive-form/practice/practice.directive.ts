import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector : '[pracDir]'
})

export class PracticeDirective {

    @HostBinding('style.color') textColor = 'Maroon';

    @HostListener('mouseover') mover() {
        this.textColor = 'blue';
    } 


}