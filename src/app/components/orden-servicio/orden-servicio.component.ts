import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orden-servicio',
  templateUrl: './orden-servicio.component.html',
  styleUrls: ['./orden-servicio.component.css']
})
export class OrdenServicioComponent implements OnInit {

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  email: ['', Validators.required],
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  password: ['', Validators.required],
  cedula: ['', Validators.required] 
});

  constructor(
    private client: ClientService,
    private fb: FormBuilder /*inyeccion de independencias*/
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
        codtecnico:this.form.value.codtecnico,
        marcadispositivo:this.form.value.marcadispositivo,
        tipodispositivo:this.form.value.tipodispositivo,
        tiposervicio:this.form.value.tiposervicio,
        accesorios:this.form.value.accesorios,
        diaginicial:this.form.value.diaginicial,
        codservicio:this.form.value.codservicio,


      }

    this.client.postRequest("http://127.0.0.1:5000/ordenServicio",data
    ).subscribe(
    (response:any)=>console.log(response),
    (error:any)=>console.log(error)
  )
      /*console.log("we",data)*/
    }else{
      console.log("Form error");
    }
  }

}
