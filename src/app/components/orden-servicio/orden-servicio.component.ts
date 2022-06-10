import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-servicio',
  templateUrl: './orden-servicio.component.html',
  styleUrls: ['./orden-servicio.component.css']
})
export class OrdenServicioComponent implements OnInit {

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  nombre: ['', Validators.required],
  telefono: ['', Validators.required],
  cedula: ['', Validators.required],
  email: ['', Validators.required],
  serial_equipo: ['', Validators.required],
  tipodispositivo: ['', Validators.required],
});

  constructor(
    private client: ClientService,
    private fb: FormBuilder,
    private route: Router /*inyeccion de independencias*/
  ) { }

    ngOnInit(): void {
    }
    onSubmit(){
      if(this.form.valid){
        let data={/**/
          nombre:this.form.value.nombre,
          telefono:this.form.value.telefono,
          cedula:this.form.value.cedula,
          email:this.form.value.email,
          serial_equipo:this.form.value.serial_equipo,
          tipodispositivo:this.form.value.tipodispositivo,
          codtecnico:this.form.value.codtecnico,
          marcadispositivo:this.form.value.marcadispositivo,

          // tiposervicio:this.form.value.tiposervicio,
          // accesorios:this.form.value.accesorios,
          // diaginicial:this.form.value.diaginicial,
          // codservicio:this.form.value.codservicio,

        }

        console.log('-> ',data);

        this.client.postRequest("http://127.0.0.1:5000/ordenServicio",data
        ).subscribe(
        (response:any)=>{
          console.log(response),
          this.route.navigate(['/asignacionTecnico']);
        }),

        (error:any)=>{
          console.log(error)
        };
      
          /*console.log("we",data)*/
        }else{
          console.log("Form error");
        }
      }

}
