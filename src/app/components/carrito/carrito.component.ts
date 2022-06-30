import { Component, OnInit } from '@angular/core';
import { AutorizacionService} from '../../services/autorizacion.service';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos=[]

  constructor(
  private client: ClientService,
  public autorizacion: AutorizacionService,
  private route: Router
  ){}

  ngOnInit(): void {
    
    let diccionario = JSON.parse(localStorage.getItem('carrito')!)
    for (const key in diccionario) {
     
        this.productos.push(diccionario[key])    
    }
    console.log("dicionario formateado en arreglo",  this.productos);
  }

}


