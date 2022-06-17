import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// nombres usados para seguridad
// envio de token = into
// nombre de usuario = Nuat
// rol =n3yB6PZnGE8n7F
// admin=J8p4SBfJgRfZCo
// tecnico=H7qm7gQr6DBGfM
// usuario=hbh2jFVsQM7RUy

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mostrarSpinner: boolean = false;
  mostrarFormulario: boolean = true;
  

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  email: ['', Validators.required],
  password: ['', Validators.required]

});
  
constructor(/*inyeccion de independencias*/
  private fb: FormBuilder,
  private client: ClientService,
  public autorizacion: AutorizacionService,
  private route: Router
  ){}

      ngOnInit(): void {
        this.form = this.fb.group({/*se inicializa el form*/
          email: ['', Validators.required],
          password: ['', Validators.required],
        });
      }
      async onSubmit(){
        this.mostrarSpinner = true;
        this.mostrarFormulario = false;
        if(this.form.valid){
          // let data={/**/
          //   email:this.form.value.email,
          //   password:this.form.value.password,
          // }

          this.client.postRequest("http://127.0.0.1:5000/login",{
            email:this.form.value.email,
            password:this.form.value.password,
          }).subscribe(

            (response:any)=>{
              console.log(response),
              //token
              this.autorizacion.login(response.into)
              //nombres
              this.autorizacion.setCourrentUser(response.Nuat)
              //rol
              this.autorizacion.setCourrentRol(response.n3yB6PZnGE8n7F)
              //doc
              this.autorizacion.setCourrentDoc(response.doc)

              this.route.navigate(['/']);

          }),

          (error:any)=> {
            console.log(error);
          };
    
          /*console.log("we",data)*/
        }else{
          console.log("Form error");

        }
     }

}

