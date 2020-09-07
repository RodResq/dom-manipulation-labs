import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Directive({
    selector: '[appHighlight]'
})
export class HighLightDirective implements OnInit{

    @Input() appHighlight;

    constructor(private elementRef: ElementRef, private render: Renderer2) {}
    
    ngOnInit(): void {
        this.render.setAttribute(this.elementRef.nativeElement, this.appHighlight, '');
    }
}