import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})

export class PerifericosComponent implements OnInit {
  
  arreglo=[]

  constructor(private client: ClientService){
      if (!localStorage.getItem('carrito')){
        localStorage.setItem('carrito', JSON.stringify({}))
      }
    }

    ngOnInit(){
      this.productos.forEach((element:any) => {
        element["cantidad"] = 1;
      });
    }

    productos = [
      {cantidad: 0, "id": 45, "nombre": "All one_accesorios", "precio": 3000, "url": "https://icons.iconarchive.com/icons/sirubico/black-metal/256/PC-icon.png"},
      {cantidad: 0, "id": 55, "nombre": "Celular_accesorios", "precio": 5000, "url": "https://icons.iconarchive.com/icons/musett/iphone-4/256/iPhone-Black-Apple-icon.png"},
      {cantidad: 0, "id": 99, "nombre": "Portatil_accesorios", "precio": 8000, "url": "https://icons.iconarchive.com/icons/chromatix/aerial/256/laptop-icon.png"}
    ]
     //   this.client.getRequestAllProducts('http://localhost:5000/productos','E').subscribe(
    //     (data: any) =>  this.productos = data["datos"],
    //     error => console.log("Ha ocurrido un error en la llamada: ", error)
    //   )
    // }

    formatearDiiconario(){
      let diccionario = JSON.parse(localStorage.getItem('carrito')!)
      for (const key in diccionario) {
       
          this.arreglo.push(diccionario[key])
          
      }
      console.log("dicionario formateado en arreglo",  this.arreglo);
    }
  
    
    Carrito(index: number){
      let car = JSON.parse(localStorage.getItem('carrito')!)
      let indiceR = this.productos[index]["id"];
      car[indiceR] =  {id: this.productos[index]["id"], cantidad: this.productos[index]["cantidad"], nombre:this.productos[index]["nombre"], precio: this.productos[index]["precio"]}
      localStorage.setItem('carrito', JSON.stringify(car))
      console.log( localStorage.getItem('carrito'), "carrito")
      
    }
  
    quitarCarrito(index: number){
      let car = JSON.parse(localStorage.getItem('carrito')!)
      let indiceR = this.productos[index]["id"];
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



  pedirProductos(){
    this.client.getRequestAllProducts('http://localhost:5000/productos?tipo=E').subscribe(
    (data: any) =>  this.productos = data["data"],
    error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
  }
 
  // pedirProductos(){
  //   this.client.getRequestAllProducts('http://localhost:5000/productos?tipo=P').subscribe(
  //     (data: any) =>  this.productos = data["data"],
  //     error => console.log("Ha ocurrido un error en la llamada: ", error)
  //   )
  //   }



  

  // ngOnInit(): void {
  //   this.pedirProductos();
  // }

}