import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})

export class PerifericosComponent implements OnInit {
  productos: any;
  
  constructor(
    private client: ClientService  
    ){}
 
  pedirProductos(){
    this.client.getRequestAllProducts('http://localhost:5000/productos?tipo=P').subscribe(
      (data: any) =>  this.productos = data["data"],
      error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
    }



  

  ngOnInit(): void {
    this.pedirProductos();
  }

}