import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({/*se inicializa el form*/
  email: ['', Validators.required],
  password: ['', Validators.required],

});
constructor(
  private client: ClientService,
  private fb: FormBuilder /*inyeccion de independencias*/
  ){}

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      let data={/**/
        email:this.form.value.email,
        password:this.form.value.password,
      }

    this.client.sendFormToJson("http://127.0.0.1:5000/login",data
    ).subscribe(
    (response:any)=>console.log(response),
    (error:any)=>console.log(error)
  )
      /*console.log("we",data)*/
    }else{

    }
  }

}

