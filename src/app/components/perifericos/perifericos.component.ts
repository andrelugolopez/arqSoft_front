import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientService } from '../../services/client.service';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})

export class PerifericosComponent implements OnInit {
  
  productos:any;
  arreglo=[]

  constructor(private client: ClientService){
    
      if (!localStorage.getItem('carrito')){
        localStorage.setItem('carrito', JSON.stringify({}))
      }
    }

    ngOnInit(){
        this.client.getRequestAllProducts(environment.url+'/productos?tipo=P').subscribe(
        (data: any) => {
          this.productos = data["data"];
          console.log(333, this.productos);
          
          this.productos.forEach((element:any) => {
            element["cantidad"] = 1;
          });
    },
        error => console.log("Ha ocurrido un error en la llamada: ", error)
        ) 
    }
    
    formatearDiiconario(){
      let diccionario = JSON.parse(localStorage.getItem('carrito')!)
      for (const key in diccionario) {
       
          this.arreglo.push(diccionario[key])
          
      }
      console.log("dicionario formateado en arreglo",  this.arreglo);
    }
  
    
    Carrito(index: number){
      let car = JSON.parse(localStorage.getItem('carrito')!)
      let indiceR = this.productos[index]["idproducto"];
      car[indiceR] =  {idproducto: this.productos[index]["idproductod"], 
                      cantidad: this.productos[index]["cantidad"], 
                      nombre:this.productos[index]["nombre"], 
                      precio: this.productos[index]["precio"]}

      localStorage.setItem('carrito', JSON.stringify(car))
      console.log( localStorage.getItem('carrito'), "carrito")
      
    }
  
    quitarCarrito(index: number){
      let car = JSON.parse(localStorage.getItem('carrito')!)
      let indiceR = this.productos[index]["idproducto"];
      delete car[indiceR]
      localStorage.setItem('carrito', JSON.stringify(car))
      console.log( localStorage.getItem('carrito'), "carrito")
      
    }
  
    cantidad(index: number, event: string){
      if(event == "+"){
        this.productos[index]["cantidad"] = this.productos[index]["cantidad"] + 1
      }else if (this.productos[index]["cantidad"] >= 2) {
        this.productos[index]["cantidad"] = this.productos[index]["cantidad"] - 1
      }
      console.log(this.productos[index]["cantidad"], event)
    }
    //me lleva a la ruta de pagar en el back
    pagar(){
      //se convierte el carrito a objeto
      let carro =   JSON.parse(localStorage.getItem('carrito')!);
      console.log(carro);
      
      //aca se hace algo asi postRequest(localhost:5000/pagar , carro)
    }
}