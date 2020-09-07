import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span [appHighlight]="'hightlight'" >I am manoj.</span> <span>I am a web developer.</span>`,
  styles: [`[hightlight]{background-color: green;color: white}`]
})
export class AppComponent {

}
