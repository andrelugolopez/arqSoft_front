import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  productos: any;

  constructor(
    private client: ClientService,
    private route: ActivatedRoute,
    private idProducto: String
  ) { }

  pedirProductos(){   
       this.client.getRequestAllProducts('http://localhost:5000/productos?tipo=E&id='+this.idProducto).subscribe(
       (data: any) =>  this.idProducto = data["data"],
       error => console.log("Ha ocurrido un error en la llamada: ", error)
       )
  }

  ngOnInit() {
    this.route.url
      .forEach(url => {
        this.idProducto = url[1].path
      }
    );
  }

}
