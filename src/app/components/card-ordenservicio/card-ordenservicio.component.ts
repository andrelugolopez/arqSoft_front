import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-card-ordenservicio',
  templateUrl: './card-ordenservicio.component.html',
  styleUrls: ['./card-ordenservicio.component.css']
})
export class CardOrdenservicioComponent implements OnInit {

  constructor(public autorizacion: AutorizacionService
    ) { }

  ngOnInit(): void {
  }

}
