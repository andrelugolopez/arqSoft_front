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
  //   this.client.getRequestAllProducts('http://localhost:5000/productos','E').subscribe(
  //     (data: any) =>  this.productos = data["datos"],
  //     error => console.log("Ha ocurrido un error en la llamada: ", error)
  //   )
  // }
  this.client.getRequestAllProducts('http://localhost:5000/productos').subscribe(
    (data: any) =>  this.productos = data["datos"],
    error => console.log("Ha ocurrido un error en la llamada: ", error)
  )
}
  

    ngOnInit(): void{
      this.pedirProductos();
    }

}
