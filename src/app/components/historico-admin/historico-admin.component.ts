import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-historico-admin',
  templateUrl: './historico-admin.component.html',
  styleUrls: ['./historico-admin.component.css']
})
export class HistoricoAdminComponent implements OnInit {
  ordenAbiertas: any
  ordenCerradas: any
  data: any
  tecnicos: any
  infoOrden: any 
  infoDiagnostico: any
  infoDiagnosticoCerrada: any
  info: any


  form: FormGroup = this.fb.group({/*se inicializa el form*/
  nombtecnico: ['', Validators.required],
  ordenAbierta: [''],
  ordenCerrada: [''],
  });



  constructor(
    private client: ClientService,
    private fb: FormBuilder, /*inyeccion de independencias*/
    private route: Router ,
    public router: ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    this.listTech();  
  }

  onSubmit(){
    this.ordenesAbiertas()
    this.ordenesCerradas()
    }

    informacionOrdenAbierta(){
      if(this.form.valid){

        console.log(this.form.value.ordenAbierta)

      this.router.paramMap
        .subscribe((params : ParamMap) => {
        this.client.getRequest('http://127.0.0.1:5000/consultaEstadoOrden?orden='+this.form.value.ordenAbierta).subscribe(
          (data: any) => {
            this.infoOrden = data["data"],
            console.log("informacion ordenes",this.infoOrden)
            this.infoDiagnostico = "Nombre cliente: " + this.infoOrden.nombreCliente + "\n "
                        + "Diagnostico inicial: " +this.infoOrden.diagnosticoInicial +"\n " 
                        + "Serial Equipo: " + this.infoOrden.serialEquipo + "\n "
                        + "Tipo dispositivo: " + this.infoOrden.tipoDispositivo + "\n "
                        + "Diagnostico inicial: " + this.infoOrden.diagnosticoInicial
                      
            },
            error => console.log("Ha ocurrido un error en la llamada: ", error)
            )
          });
        }else{
          console.log("Form error");
        }
      }


    informacionOrdenCerrada(){
      if(this.form.valid){

        console.log(this.form.value.ordenCerrada)

      this.router.paramMap
        .subscribe((params : ParamMap) => {
        this.client.getRequest('http://127.0.0.1:5000/consultaEstadoOrden?orden='+this.form.value.ordenCerrada).subscribe(
          (data: any) => {
            this.info = data["data"],
            console.log("informacion ordenes",this.infoOrden)
            this.infoDiagnosticoCerrada= "Nombre cliente: " + this.info.nombreCliente + "\n "
                        + "Diagnostico inicial: " +this.info.diagnosticoInicial +"\n " 
                        + "Serial Equipo: " + this.info.serialEquipo + "\n "
                        + "Tipo dispositivo: " + this.info.tipoDispositivo + "\n "
                        + "Diagnostico inicial: " + this.info.diagnosticoInicial + "\n "
                        + "Observaciones salida: " + this.info.historicoCierre
                      
            },
            error => console.log("Ha ocurrido un error en la llamada: ", error)
            )
          });
        }else{
          console.log("Form error");
        }
      }

    ordenesCerradas(){
      if(this.form.valid){
        let tecnico={
          nombtecnico:this.form.value.nombtecnico
        }
        console.log(tecnico.nombtecnico)

      this.router.paramMap
        .subscribe((params : ParamMap) => {
        this.client.getRequest(`http://127.0.0.1:5000/consultaOrdenTecnicos?tecnico=${tecnico.nombtecnico}`).subscribe(
          (data: any) => {
            this.ordenCerradas = data["data"],
            console.log("informacion",this.ordenCerradas)
            },
            error => console.log("Ha ocurrido un error en la llamada: ", error)
            )
          });
        }else{
          console.log("Form error");
        }
      }



      ordenesAbiertas(){
        if(this.form.valid){
          let tecnico={
            nombtecnico:this.form.value.nombtecnico
          }
          console.log(tecnico.nombtecnico)
  
        this.router.paramMap
          .subscribe((params : ParamMap) => {
          this.client.getRequest(`http://127.0.0.1:5000/consultaDiagnostico?nombreTecnico=${tecnico.nombtecnico}`).subscribe(
            (data: any) => {
              this.ordenAbiertas = data["data"],
              console.log(data)
              },
              error => console.log("Ha ocurrido un error en la llamada: ", error)
              )
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
}
