import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asignacion-tecnico',
  templateUrl: './asignacion-tecnico.component.html',
  styleUrls: ['./asignacion-tecnico.component.css']
})
export class AsignacionTecnicoComponent implements OnInit {











  constructor(
    private client: ClientService,
    private fb: FormBuilder /*inyeccion de independencias*/
  ) { }

  ngOnInit(): void {
  }






  

}
