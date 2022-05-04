import { Component, OnInit} from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  productos: any;

  constructor(
    private client: ClientService  
    ){}

  pedirProductos(){
 //  this.client.getRequestAllProducts('http://localhost:5000/productos?tipo=E').subscribe(
 //    (data: any) => {
 //      this.productos = data["data"];
 //      console.log("Hola mundo", this.productos);
 //    },
 //    error => console.log("Ha ocurrido un error en la llamada: ", error)
 //  )
 // }

    this.client.getRequestAllProducts('http://localhost:5000/productos?tipo=E').subscribe(
    (data: any) =>  this.productos = data["data"],
    error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
  }
  

    ngOnInit(): void{
      this.pedirProductos();
    }

}
