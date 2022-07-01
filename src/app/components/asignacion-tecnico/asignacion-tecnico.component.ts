import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-asignacion-tecnico',
  templateUrl: './asignacion-tecnico.component.html',
  styleUrls: ['./asignacion-tecnico.component.css']
})
export class AsignacionTecnicoComponent implements OnInit {

  data: any
  ordenes: any
  info: any

  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  id_tec: this.fb.control({value: localStorage.getItem('courrentDoc') ?? '', disabled: true}, [Validators.required]),
  nombretecnico: this.fb.control({value: localStorage.getItem('courrentUser') ?? '', disabled: true}, [Validators.required]),
  tipodispositivo: ['', Validators.required],
  diaginicial: ['', Validators.required],

//Envio json
  ordenServicio: ['', Validators.required],
  escalar: ['', Validators.required],
  reporte: ['', Validators.required],
  });

constructor(
  private client: ClientService,
  private fb: FormBuilder, /*inyeccion de independencias*/
  private route: Router ,
  public router: ActivatedRoute,
  public autorizacion: AutorizacionService,

  ){
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }


  ngOnInit(): void{
    this.consultarOrdenes()
  }
  
  consultarOrdenes(){
    this.router.paramMap
    .subscribe((params : ParamMap) => {

    this.client.getRequest(environment.url+`/consultaDiagnostico?nombreTecnico=`+localStorage.getItem('courrentUser'))
    .subscribe(    
      (data: any) => {
      this.ordenes = data["data"]
      console.log("data",this.ordenes)
      },
      error => console.log("Ha ocurrido un error en la llamada: ", error)
      )
    });
  }

  consultarInformacion(){
    this.router.paramMap
    .subscribe((params : ParamMap) => {
      
    this.client.getRequest(environment.url+`/consultaOrdenServicio?orden=`+this.form.value.ordenServicio)
    .pipe()
    .subscribe(    
      (data: any) => this.fillForm(data["data"]),
      error => console.log("Ha ocurrido un error en la llamada: ", error)
      )
    });
  }


  onSubmit(){
    if(this.form.valid){
      let data={
        fecha:this.fecha,
        hora:this.hora,
        id_tec:this.form.value.id_tec,
        nombretecnico:this.form.value.nombretecnico,
        tipodispositivo:this.form.value.tipodispositivo,
        diaginicial:this.form.value.diaginicial,
//Envio json
        ordenServicio:this.form.value.ordenServicio,
        escalar:this.form.value.escalar,
        reporte:this.form.value.reporte,
      }

      Swal.fire('La información ha sido almacenada')

    this.client.postRequest(environment.url+"/actualizarHistoria",data
    ).subscribe(
      (data:any) => {
        console.log(data["data"]),
        this.route.navigate(['/asignacion-tecnico']);
      },
      (error:any)=>{
        console.log(error)
      });
    }else{
        Swal.fire(
        'Falta Informacion',
        'Por favor complétalos',
        'warning'
        )
      console.log("Form error");
    }
}  

public fillForm(values: any) {

  // Diccionario
  // Convierto las llaves de value a las llaves de form
  const valueToForm: {[key: string]: string} = {
    "diagnosticoInicial": "diaginicial",
    "tipoDispositivo": "tipodispositivo",
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
