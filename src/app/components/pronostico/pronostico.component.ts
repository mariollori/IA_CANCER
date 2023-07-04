import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css']
})
export class PronosticoComponent {

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log(jsonData);
      // Aquí puedes procesar los datos según tus necesidades
    };
    fileReader.readAsArrayBuffer(file);
  }
}
