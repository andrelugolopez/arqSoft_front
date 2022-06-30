import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orden-servicio',
  templateUrl: './orden-servicio.component.html',
  styleUrls: ['./orden-servicio.component.css']
})
export class OrdenServicioComponent implements OnInit {
  data: any
  tecnicos: any

  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  cedula: ['', Validators.required],
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  telefono: ['', Validators.required],
  email: ['', Validators.required],
  serial_equipo: ['', Validators.required],
  nombtecnico: ['', Validators.required],
  marcadispositivo: ['', Validators.required],
  tipodispositivo: ['', Validators.required],
  tiposervicio: ['', Validators.required],
  accesorios: ['', Validators.required],
  diaginicial: ['', Validators.required],

});

  constructor(
    private client: ClientService,
    private fb: FormBuilder,
    private route: Router 
  ) {
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }

    ngOnInit(): void {
      this.listTech();
    }

    onSubmit(){
      console.warn(this.form.value)
      if(this.form.valid){
        let data={
          fecha:this.fecha,
          hora:this.hora,
          nombres:this.form.value.nombres,
          telefono:this.form.value.telefono,
          apellidos:this.form.value.apellidos,
          cedula:this.form.value.cedula,
          email:this.form.value.email,
          serial_equipo:this.form.value.serial_equipo,
          tipodispositivo:this.form.value.tipodispositivo,
          nombtecnico:this.form.value.nombtecnico,
          marcadispositivo:this.form.value.marcadispositivo,
          tiposervicio:this.form.value.tiposervicio,
          accesorios:this.form.value.accesorios,
          diaginicial:this.form.value.diaginicial
        }

        Swal.fire('Orden generada')

        this.client.postRequest(environment.url+"/ordenServicio",data
        ).subscribe(
          (data:any) => {

            console.log(data["data"])
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 2500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({
              icon: 'success',
              title: 'Orden generada satisfactoriamente'
            })
            this.route.navigate(['/']);

          },
          (error:any)=>{
            console.log(error)
          });
        }else{
          Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'warning'
          )
          console.log("Form error");

        }
    }    
    
      listTech(){
        this.client.getRequest(environment.url+'/consultaTecnicos').subscribe(    
          (data: any) => {
          this.tecnicos = data["data"],
          console.log(data)
          },
          error => console.log("Ha ocurrido un error en la llamada: ", error)
          )
        }


      changeInput(){
          this.client.postRequest(environment.url+"/consultaOrden",{     
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

      // Diccionario
      // Convierto las llaves de value a las llaves de form
      const valueToForm: {[key: string]: string} = {
        "nombres": "nombres",
        "apellidos": "apellidos",
        "correo": "email",
        "telefono": "telefono",
        "fecha": "fecha",
        "hora": "hora",
      }
      Object.entries(values).forEach(([name, value]) => {
        // Obtengo la llave del formulario desde los values
        // correo -> email
        const formKey = valueToForm[name];

        // Obtengo el control del formulario
        const control = this.form.get(formKey) as FormControl;

        // Si el control no existe o está modificado, retorno
        if (!control || control.dirty) return;

        // Defino el valor al control del formulario
        control!.setValue(value);
      });
    }
}