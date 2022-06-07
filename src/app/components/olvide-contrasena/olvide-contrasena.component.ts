import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AutorizacionService } from '../../services/autorizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , ParamMap } from '@angular/router';

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
    private client: ClientService,
    public autorizacion: AutorizacionService,
    private fb: FormBuilder,
    private route : ActivatedRoute

  ) { }


  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      let data={/**/
        email:this.form.value.email
      }

    this.route.paramMap
      .subscribe((params : ParamMap) => {
      let email = + params.get('email')!;

      this.client.getRequestAllProducts(`http://localhost:5000/tokenContrasena?correo=${email}`
      ).subscribe(

      (response:any)=>{
      console.log(response),
      //Email
      this.autorizacion.setCourrentEmail(response.email)
      //CodigoR
      this.autorizacion.setCourrentCodigoR(response.CodigoR)},
      (error:any)=>console.log(error)
      )
  });
  }else{

  }

}
}
