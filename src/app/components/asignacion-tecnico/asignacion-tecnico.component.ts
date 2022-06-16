import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-asignacion-tecnico',
  templateUrl: './asignacion-tecnico.component.html',
  styleUrls: ['./asignacion-tecnico.component.css']
})
export class AsignacionTecnicoComponent implements OnInit {
  data: any
  date = new Date().toLocaleString().split(',')
  fecha = this.date[0].replace(/\//g, "-")
  hora = this.date[1]
  

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  codtecnico: ['', Validators.required],
  nombretecnico: ['', Validators.required],
  codservicio: ['', Validators.required],
  tipodispositivo: ['', Validators.required],
  escalarservicio: ['', Validators.required],
  tipoespeciescalar: ['', Validators.required],
  diaginicial: ['', Validators.required]
});



constructor(
  private client: ClientService,
  private fb: FormBuilder /*inyeccion de independencias*/
  ){
    setInterval(() => {
      this.hora = new Date().toLocaleString().split(',')[1]
    }, 1)
  }

  
  ngOnInit(): void{
    let infot = {
        codte: localStorage.getItem("courrentDoc"),  
      }
      console.log("documento tecnico",infot)  
  }
/**/
  onSubmit(){
    if(this.form.valid){
      let data={/**/
      codtecnico:this.form.value.codtecnico,
      nombretecnico:this.form.value.nombretecnico,
      codservicio:this.form.value.codservicio,
      tipodispositivo:this.form.value.tipodispositivo,
      escalarservicio:this.form.value.escalarservicio,
      tipoespeciescalar:this.form.value.tipoespeciescalar,
      diaginicial:this.form.value.diaginicial
     
      }



    this.client.postRequest("http://127.0.0.1:5000/asignacionTecnico",data
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
