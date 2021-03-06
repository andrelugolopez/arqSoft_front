import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  productos=[];
  arreglo=[];
  form: FormGroup;
  mostrarFormulario: boolean = true;

  
  constructor(
    public autorizacion: AutorizacionService,
    public client: ClientService,
    private fb: FormBuilder,
    private route: Router,
    ) {}


    ngOnInit(): void {
      this.form = this.fb.group({
        telefono: ['', Validators.required],
        direccion: ['', Validators.required],
        departamento: ['', Validators.required],
        municipio: ['', Validators.required],
        pagos: ['', Validators.required]
      });

      let diccionario = JSON.parse(localStorage.getItem('carrito')!)
      for (const key in diccionario) {
     
        this.productos.push(diccionario[key])    
     }
      console.log("dicionario formateado en arreglo",  this.productos);

      
    }

  onSubmit(){
    if (this.form.valid) {
      if (localStorage.getItem('into')){
        let carritof= localStorage.getItem('carrito')
        let f = JSON.parse(carritof)
        let diccionario = JSON.parse(localStorage.getItem('carrito')!)
        for (const key in diccionario) {
        
            this.arreglo.push(diccionario[key])
            
        }
        console.log("dicionario formateado en arreglo",  this.arreglo);
        this.client.postRequest(environment.url+'/facturacion', {
          telefono: this.form.value.telefono,
          direccion: this.form.value.direccion,
          departamento: this.form.value.departamento,
          municipio: this.form.value.municipio,
          pagos:this.form.value.pagos,
          data: this.arreglo
          }).subscribe(
            (response: any) => {
              console.log(response);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Compra exitosa',
                showConfirmButton: false,
                timer: 2500
              });
        },
        (error) => {
          console.log(error.status);
        })
      }
      else{
        this.route.navigate(['/login']);
      }
  }
  else {
    console.log("pila esta etrando a otra cosa")
    console.log("Form error");
    Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Algo salio mal, revisa campos',
    showConfirmButton: false,
    timer: 2500
    })

   }
   this.route.navigate(['/']);
   this.autorizacion.deletecarrito();

}

}
