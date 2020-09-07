import { ParentComponent } from './parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';


@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent,
    ],
    imports: [ CommonModule ],
    exports: [ ParentComponent ]
})
export class ParentModule {
    
}