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
  producto: any;
  idproducto: any;


  constructor(
    private client: ClientService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.route.url
      .subscribe(url => {
        this.idproducto = url[1].path;
      }
    );
    this.client.getRequestAllProducts('http://localhost:3000/producto/'+this.idproducto).subscribe(
      (data: any) => this.producto = data,

      error => console.log("Ha ocurrido un error en la llamada: ", error)
      )
  }

}
