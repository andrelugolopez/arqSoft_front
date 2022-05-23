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

  constructor(/*inyeccion de independencias*/
  private client: ClientService,
  public autorizacion: AutorizacionService,
  private route: Router
  ){}

  ngOnInit(): void {
  }

  comprar(idproducto:any){
    this.client.postRequest('http://localhost:5000/carrito', {idproducto: idproducto}, this.autorizacion.getToken()).subscribe(
      (response: any) => {console.log(response);
      },
      (error: any) => {console.log(error);}
    )
    console.log("ID producto: ", idproducto);
    
  }


}


