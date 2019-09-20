import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public cpInitialColor: string = '#sljfhf';
  public cpFallbackColor: string = '#dcddcd';
  public cpDescription: string = 'put something at least';
  public currentColorValue: string;

  onEventLog(value, $event) {
    if ($event.color != undefined) {
      console.log(this.currentColorValue)
      this.currentColorValue = $event.color;
    }
    console.log(1, this.currentColorValue);
  }
}
