import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span #el>I am manoj.</span> <span>I am a web developer.</span>`,
  styles: [`[highlight]{background-color: green;color: white}`]
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('el') span: ElementRef

  ngAfterViewInit(): void {
    this.span.nativeElement.setAttribute('highlight', '');

  }

}
