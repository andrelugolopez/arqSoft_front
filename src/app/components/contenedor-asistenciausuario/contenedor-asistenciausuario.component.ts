import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';


@Component({
  selector: 'app-contenedor-asistenciausuario',
  templateUrl: './contenedor-asistenciausuario.component.html',
  styleUrls: ['./contenedor-asistenciausuario.component.css']
})
export class ContenedorAsistenciausuarioComponent implements OnInit {
  mostrarFormulario: boolean = true;
  
  constructor(
    public autorizacion: AutorizacionService
  ) { }

  ngOnInit(): void {
  }

}
