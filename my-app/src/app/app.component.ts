import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ngRx-test-app';

  constructor() {}

  onClick() {
    console.log(1);
    console.log(jsPDF);
    console.log(html2canvas);
    // // @ts-ignore
    // html2canvas();
  }

  generatePdf() {
    const div = document.getElementById("html2Pdf");
    const options = {background: "white", height: div.clientHeight, width: div.clientWidth};
    // @ts-ignore
    html2canvas(div, options).then((canvas) => {
      //Initialize JSPDF
      let doc = new jsPDF("p", "mm", "a4");
      //Converting canvas to Image
      let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF
      doc.addImage(imgData, 'PNG', 20, 20);

      let pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (let i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }

      //Name of pdf
      const fileName = "example.pdf";

      // Make file
      doc.save(fileName);

    });
  }
}
