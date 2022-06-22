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
  data: any
  tecnicos: any

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  nombtecnico: ['', Validators.required],
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
