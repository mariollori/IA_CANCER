import { Component } from '@angular/core';
import { PronosticoService } from 'src/app/services/pronostico.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css']
})
export class PronosticoComponent {

  data :any ;
  pronostico:any;
  constructor(private service:PronosticoService){}

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      console.log(jsonData);
      this.data = jsonData[3]
      console.log(this.data);
      this.predecir();
    
    };
    fileReader.readAsArrayBuffer(file);
  }


  predecir(){
    this.service.postPronostico(this.data).subscribe(data=>{
      console.log(data)
      this.pronostico = data;
    })
  }
}
