import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvide-contrasena',
  templateUrl: './olvide-contrasena.component.html',
  styleUrls: ['./olvide-contrasena.component.css']
})
export class OlvideContrasenaComponent implements OnInit {

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  email: ['', Validators.required],

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
          let data={/**/
            email:this.form.value.email,
        }


        this.client.postRequest("http://127.0.0.1:5000/tokenContrasena",data
          ).subscribe(

            (response:any)=>{
              console.log(response),
              //token
              this.autorizacion.login(response.into)
              //CodigoR
              this.autorizacion.setCourrentCodigoR(response.CodigoR)
              //Email
              this.autorizacion.setCourrentCodigoR(response.email)

              this.route.navigate(['/nuevaContrasena']);

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









