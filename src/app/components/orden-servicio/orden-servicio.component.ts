import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-orden-servicio',
  templateUrl: './orden-servicio.component.html',
  styleUrls: ['./orden-servicio.component.css']
})
export class OrdenServicioComponent implements OnInit {
  valor: any=  "qqqqqqqqqqq";
  data: any
  tecnicos: any

  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  telefono: ['', Validators.required],
  cedula: ['', Validators.required],
  email: ['', Validators.required],
  nombtecnico: ['', Validators.required],
  serial_equipo: ['', Validators.required],
  tipodispositivo: ['', Validators.required],
  tiposervicio: ['', Validators.required],
  accesorios: ['', Validators.required],
  diaginicial: ['', Validators.required],


});

  constructor(
    private client: ClientService,
    private fb: FormBuilder,
    private route: Router /*inyeccion de independencias*/
  ) {
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }

    ngOnInit(): void {
      this.listTech();
    }

    onSubmit(){
      if(this.form.valid){
        let data={/**/
          nombres:this.form.value.nombres,
          telefono:this.form.value.telefono,
          apellidos:this.form.value.apellidos,
          cedula:this.form.value.cedula,
          email:this.form.value.email,
          serial_equipo:this.form.value.serial_equipo,
          tipodispositivo:this.form.value.tipodispositivo,
          nombtecnico:this.form.value.codtecnico,
          marcadispositivo:this.form.value.marcadispositivo,
          tiposervicio:this.form.value.tiposervicio,
          accesorios:this.form.value.accesorios,
          diaginicial:this.form.value.diaginicial
        }

        this.client.postRequest("http://127.0.0.1:5000/ordenServicio",data
        ).subscribe(
          (data:any) => {
            console.log(data["data"]),
            this.route.navigate(['/asignacionTecnico']);
          },
          (error:any)=>{
            console.log(error)
          });
        }else{
          console.log("Form error");
        }
    }    
    
      listTech(){
        this.client.getRequest('http://127.0.0.1:5000/consultaTecnicos').subscribe(    
          (data: any) => {
          this.tecnicos = data["data"],
          console.log(data)
          },
          error => console.log("Ha ocurrido un error en la llamada: ", error)
          )
        }


      changeInput(){
          this.client.postRequest("http://127.0.0.1:5000/consultaOrden",{     
            telefono:this.form.value.telefono,
            cedula:this.form.value.cedula,
            email:this.form.value.email,
          }).pipe()
          .subscribe({
            next: (data:any) => this.fillForm(data["data"]),
            error: (error) => console.log("Ha ocurrido un error en la llamada: ", error)
          }
          )}

    public fillForm(values: any) {
      this.form.patchValue({
        nombres: values.nombres,
        apellidos: values.apellidos,
        email: values.correo,
        telefono: values.telefono,
      })
    }
    
}