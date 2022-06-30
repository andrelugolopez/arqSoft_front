import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  ordenes: any
  data:any

  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]


  form: FormGroup = this.fb.group({/*se inicializa el form*/
  cedula: ['',Validators.required],
  nombreCliente: ['', Validators.required],
  telefono: ['', Validators.required],
  marcaDispositivo: ['', Validators.required],
  tipoDispositivo: ['', Validators.required],
  accesorios: ['', Validators.required],
  diaginicial: ['', Validators.required],
  diagnosticoDetallado: ['', Validators.required],
  });

  constructor(
    private client: ClientService,
    private fb: FormBuilder, /*inyeccion de independencias*/
    private route: Router ,
    public router: ActivatedRoute,
    public autorizacion: AutorizacionService,
  ) 
  
  
  { 
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }

  ngOnInit(): void {
    this.consultarOrdenes()
    console.log("ordenes",this.ordenes)
  }


  consultarOrdenes(){
    this.router.paramMap
    .subscribe((params : ParamMap) => {

    this.client.getRequest(environment.url+`/consultaHistoria?nombre=`+localStorage.getItem('courrentUser'))
    .subscribe(    
      (data: any) => {
      this.ordenes = data["data"]
      console.log("data",this.ordenes)
      },
      error => console.log("Ha ocurrido un error en la llamada: ", error)
      )
    });
  }

  
}
