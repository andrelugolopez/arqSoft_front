import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.component.html',
  styleUrls: ['./nueva-contrasena.component.css']
})
export class NuevaContrasenaComponent implements OnInit {

  password: any

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  codigo: ['', Validators.required],
  contrasena: ['', Validators.required],
  nuevacontrasena: ['', Validators.required],

});

  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    public autorizacion: AutorizacionService,
    private route: Router
    
  ) { }

  ngOnInit(): void {
        }


  onSubmit(){
    if(this.form.valid){
      let data= {
        codigo:this.form.value.codigo,
        contrasena:this.form.value.contrasena,
        nuevacontrasena:this.form.value.nuevacontrasena,
    }
      if(data.codigo == localStorage.getItem("courrentCodigoR")){

        if(data.contrasena==data.nuevacontrasena){
          this.password = data.contrasena
        }else{
          console.log("Error contrasena")
        }

        let info = {
          password :this.password,
          email: localStorage.getItem("email"),  
        }
        console.log("hola",info)

        this.client.postRequest("http://127.0.0.1:5000/cambioClave",info
          ).subscribe(
          (response:any)=>{
          console.log(response),
          this.route.navigate(['/login']);

          }),
          (error:any)=>console.log(error)
      }else{
        console.log("Error codigo");

      }
    }else{
      console.log("Form error");
    }
  }
}

  
      

    

