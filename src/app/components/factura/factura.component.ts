import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  productos=[];
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
        console.log(f, 77777);

        this.client.postRequest('http://127.0.0.1:5000/facturacion', {
          telefono: this.form.value.telefono,
          direccion: this.form.value.direccion,
          departamento: this.form.value.departamento,
          municipio: this.form.value.municipio,
          pagos:this.form.value.pagos,
          data: f
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
            // localStorage.setItem('email', response.email)
            // sessionStorage.setItem('pass', response.password)
            // console.log(localStorage.getItem('email'));
            // this.route.navigate( ['/ayuda']);
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
    console.log("Form error");
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Algo salio mal, revisa campos',
      showConfirmButton: false,
      timer: 2500
      })
   }

}

}
