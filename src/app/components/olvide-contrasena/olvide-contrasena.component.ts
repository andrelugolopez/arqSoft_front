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
          let dataEmail= {
            email:this.form.value.email,
        }

        console.log('-> ',dataEmail.email);
        

        this.client.postRequest("http://127.0.0.1:5000/tokenContrasena",dataEmail
          ).subscribe(
            (response:any)=>{
              console.log(response),
              console.log("****",response.dataEmail)
              let stringEmail: any = JSON.stringify(dataEmail)
              console.log('# ',stringEmail);
              
              //CodigoR
              this.autorizacion.setCourrentCodigoR(response.CodigoR)

              //Email
              this.autorizacion.setCourrentEmail(response.dataEmail)
              localStorage.setItem("email",dataEmail.email)

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









