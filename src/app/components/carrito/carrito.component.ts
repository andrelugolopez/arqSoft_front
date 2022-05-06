import { Component, OnInit } from '@angular/core';
import { AutorizacionService} from '../../services/autorizacion.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public autorizacion: AutorizacionService) { }

  ngOnInit(): void {
  }

}
