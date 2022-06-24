import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';


@Component({
  selector: 'app-asignacion-tecnico',
  templateUrl: './asignacion-tecnico.component.html',
  styleUrls: ['./asignacion-tecnico.component.css']
})
export class AsignacionTecnicoComponent implements OnInit {
  data: any
  ordenes: any


  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]


  form: FormGroup = this.fb.group({/*se inicializa el form*/
  id_tec: this.fb.control({value: localStorage.getItem('courrentDoc') ?? '', disabled: true}, [Validators.required]),
  nombretecnico: this.fb.control({value: localStorage.getItem('courrentUser') ?? '', disabled: true}, [Validators.required]),
  codservicio: ['', Validators.required],
  tipodispositivo: ['', Validators.required],
  escalarservicio: ['', Validators.required],
  tipoespeciescalar: ['', Validators.required],
  diaginicial: ['', Validators.required]
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

    this.client.getRequest(`http://127.0.0.1:5000/consultaDiagnostico?nombreTecnico=`+localStorage.getItem('courrentUser'))
    .subscribe(    
      (data: any) => {
      this.ordenes = data
      console.log("data",this.ordenes)
      },
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
        codservicio:this.form.value.codservicio,
        escalarservicio:this.form.value.escalarservicio,
        tipoespeciescalar:this.form.value.tipoespeciescalar,
        diaginicial:this.form.value.diaginicial

      }

    this.client.postRequest("http://127.0.0.1:5000/asignacionTecnico",data
    ).subscribe(
      (data:any) => {
        console.log(data["data"]),
        this.route.navigate(['/']);
      },
      (error:any)=>{
        console.log(error)
      });
    }else{
      console.log("Form error");
    }
}  

}


