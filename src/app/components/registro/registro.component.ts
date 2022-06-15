import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup = this.fb.group({/*se inicializa el form*/
  email: ['', Validators.required],
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  password: ['', Validators.required],
  cedula: ['', Validators.required] 
});

constructor(
  private client: ClientService,
  private fb: FormBuilder, /*inyeccion de independencias*/
  private route: Router /*inyeccion de independencias*/
  ){}
  ngOnInit(): void{
  }
/**/
  onSubmit(){
    if(this.form.valid){
      let data={/**/
        email:this.form.value.email,
        nombres:this.form.value.nombres,
        apellidos:this.form.value.apellidos,
        password:this.form.value.password,
        cedula:this.form.value.cedula
      }

    this.client.postRequest("http://127.0.0.1:5000/register",data
    ).subscribe(
    (response:any)=>{
      console.log(response),
      this.route.navigate(['/login']);
    }),
    (error:any)=>{
      console.log(error)
    };
      /*console.log("we",data)*/
    }else{
      console.log("Form error");
    }
  }
}
