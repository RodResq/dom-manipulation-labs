import { Directive, Input, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: '[appHighlight]'
})
export class HighLightDirective implements OnInit{

    @Input() appHighlight;

    constructor(private elementRef: ElementRef) {}
    
    ngOnInit(): void {
        this.elementRef.nativeElement.setAttribute(this.appHighlight, '')
    }
}