import { ElementRef, Directive } from '@angular/core';

@Directive({
    selector: 'ion-textarea[autoresize]',
    host: {
        '(ionChange)': 'adjust()',
    },
})

export class AutoResize {
    constructor(public element: ElementRef) {
    }

    adjust(): void {
        let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflowX = 'hidden';
        textArea.style.overflowY = 'auto';
        textArea.style.height = 'auto';
        textArea.style.maxHeight = '160px'; // Autoresize will stop after this height
        textArea.style.height = textArea.scrollHeight + "px";
    }
}