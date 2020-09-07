import { AfterViewChecked, Component, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';


@Component({
    selector: 'app-parent',
    template: `<p>Parent Works</p>
    <app-child #child></app-child>
    <button (click)="removeChild()">remove child</button>
    `,
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewChecked{

    @ViewChildren('child', {read: ElementRef}) 
    childComp: QueryList<ElementRef>
    
    constructor(
        private renderer: Renderer2, 
        private host: ElementRef) {}

    ngAfterViewChecked(): void {
        console.log(this.childComp.length);
    }

    removeChild() {
        this.renderer.removeChild(this.host.nativeElement, this.childComp.first.nativeElement);
    }
 
}