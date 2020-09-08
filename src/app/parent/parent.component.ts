import { AfterViewChecked, Component, ElementRef, Renderer2, ViewChildren, QueryList, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-parent',
    template: `<p>Parent Works</p>
    <ng-container #viewcontainer></ng-container>
    <ng-template>
        <app-child #child></app-child>
    </ng-template>
    <button (click)="removeChild()">remove child</button>
    `,
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewChecked, AfterViewInit{

    @ViewChildren('child', {read: ElementRef}) 
    childComp: QueryList<ElementRef>

    @ViewChild('viewcontainer', {read: ViewContainerRef}) viewcontainer;

    @ViewChild(TemplateRef) template: TemplateRef<null>;
    
    constructor(
        private renderer: Renderer2, 
        private host: ElementRef) {}
    
    
    ngAfterViewInit(): void {
        this.viewcontainer.createEmbeddedView(this.template);
    }

    ngAfterViewChecked(): void {
        console.log("The child component count " + this.childComp.length);
    }

    removeChild() {
        this.viewcontainer.remove();
    }
 
}