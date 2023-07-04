import { Component, Input } from '@angular/core';
import { PronosticoService } from 'src/app/services/pronostico.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pronostico',
  templateUrl: './pronostico.component.html',
  styleUrls: ['./pronostico.component.css'],
})
export class PronosticoComponent {
  datitaxd = [0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  @Input() placeholder: string = "Ingresa un valor";
  @Input() borderColor!: string;
  @Input() icon!: string;
  @Input() iconColor!: string;
  my_array = [
    'Media del radio', 'Media de la textura', 'Media del perímetro',
    'Media del área', 'Media de la suavidad', 'Media de la compacidad',
    'Media de concavidad', 'Media de puntos cóncavos', 'Media de simetría',
    'Dimensión fractal media', 'Radio se', 'Textura se', 'Perímetro se',
    'Area se','Suavidad se' ,'Compacidad se' ,
    'Concavidad se', 'Puntos cóncavos se', 'Simetría se', 'Dimensión fractal se',
       'Peor radio', 'Peor textura', 'Peor perímetro', 'Peor área', 'Peor suavidad',
         'Compacidad peor', 'Concavidad peor', 'Puntos cóncavos peor', 'Simetría peor', 'Dimensión fractal peor']
  option!: string;
  valor = 0;
  data: any;
  dataValor: any;
  pronostico: any;

  constructor(private service: PronosticoService) {}

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      this.valor = jsonData.length;
      this.data = jsonData;
    };
    fileReader.readAsArrayBuffer(file);
  }

  obtenerPrediccion() {
    this.dataValor = this.data[this.option];
    this.datitaxd = this.dataValor
    console.log(this.datitaxd)
    this.predecir()
  }

  predecir() {
    this.service.postPronostico(this.dataValor).subscribe((data) => {
      const { prediction } = data;
      console.log(prediction);
      this.pronostico = prediction;
    });
  }







  isPlaceholderActive: boolean = false;
  inputId!: string;

  ngOnInit() {
    this.inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  }

  movePlaceholder() {
    this.isPlaceholderActive = true;
  }

  checkInput() {
    const inputElement = document.getElementById(
      this.inputId
    ) as HTMLInputElement;
    if (inputElement && !inputElement.value) {
      this.isPlaceholderActive = false;
    }
  }

  activateInput() {
    const inputElement = document.getElementById(this.inputId);
    if (inputElement) {
      inputElement.focus();
    }
  }
}
