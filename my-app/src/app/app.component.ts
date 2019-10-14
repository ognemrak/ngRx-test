import { Component } from '@angular/core';
declare const VERSION: string;
import * as PDFkit from 'pdfkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ngRx-test-app' + VERSION;

  constructor() {}

  onClick() {
    console.log(PDFkit);
  }
}
