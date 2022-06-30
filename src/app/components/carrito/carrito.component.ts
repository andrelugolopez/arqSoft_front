import { Component, OnInit } from '@angular/core';
import { AutorizacionService} from '../../services/autorizacion.service';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

export type Producto = {
  nombre: string,
  precio: number,
  cantidad: number
}
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos=[]
  public total = 0;

  constructor(
  private client: ClientService,
  public autorizacion: AutorizacionService,
  private route: Router
  ){}

  ngOnInit(): void {
    type Diccionario = { [key: string]: Producto }
    let diccionario: Diccionario = JSON.parse(localStorage.getItem('carrito')!)
    let totalVentas = 0;
    this.productos = Object.values(diccionario)
    .map(
      el => {
        const subtotal = el.cantidad * el.precio;
        totalVentas += subtotal
        return {
          ...el, 
          subtotal
        }
    })
    this.total = totalVentas;
    console.log("dicionario formateado en arreglo",  this.productos);
    
  }

}


