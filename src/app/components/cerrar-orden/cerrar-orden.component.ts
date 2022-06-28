import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cerrar-orden',
  templateUrl: './cerrar-orden.component.html',
  styleUrls: ['./cerrar-orden.component.css']
})
export class CerrarOrdenComponent implements OnInit {

  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]

  constructor(
    private client: ClientService,
    private fb: FormBuilder, /*inyeccion de independencias*/
    private route: Router ,
    public router: ActivatedRoute,
    public autorizacion: AutorizacionService, 
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }

  form: FormGroup = this.fb.group({/*se inicializa el form*/
    nombreCliente: ['', Validators.required],
    serial: ['', Validators.required],
    accesoriosDispositivos: ['', Validators.required],
    diagnosticoInicial: ['', Validators.required],
    Observacion: ['', Validators.required],
    

  });

onSubmit(){
  console.warn(this.form.value)
  if(this.form.valid){
    let data={
      fecha:this.fecha,
      hora:this.hora,
      nombreCliente:this.form.value.nombreCliente,
      serial:this.form.value.serial,
      diagnosticoInicial:this.form.value.diagnosticoInicial,
      Observacion:this.form.value.Observacion,
    }

    this.client.postRequest("http://127.0.0.1:5000/actualizarSalida",data
    ).subscribe(
      (data:any) => {
        console.log(data["data"]),

        Swal.fire('Orden Creada') 
        this.route.navigate(['/asistenciatenicadmin']);
      },
      (error:any)=>{
        console.log(error)
      });
    }else{
        Swal.fire(
        'Falta Informacion',
        'Por favor completalos',
        'warning'
        )
      console.log("Form error");
    }
 console.log("*********",this.form.value.serial )
   
} 

changeInput(){
  this.router.paramMap
  .subscribe((params : ParamMap) => {

  this.client.getRequest('http://127.0.0.1:5000/consultaEquipo?serial='+this.form.value.serial)
  .pipe()
  .subscribe(    
    (data: any) => this.fillForm(data["data"]),
    error => console.log("Ha ocurrido un error en la llamada: ", error)
    )
  });
}


public fillForm(values: any) {

// Diccionario
// Convierto las llaves de value a las llaves de form
const valueToForm: {[key: string]: string} = {
"nombreCliente": "nombreCliente",
"accesoriosDispositivos": "accesoriosDispositivos",
"diagnosticoInicial": "diagnosticoInicial",
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