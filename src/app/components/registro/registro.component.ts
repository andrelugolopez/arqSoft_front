import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      let data={
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
      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 2500
      });
    // const { value: accept } = await Swal.fire({
    //   title: 'Terms and conditions',
    //   input: 'checkbox',
    //   inputValue: 1,
    //   inputPlaceholder:
    //     'I agree with the terms and conditions',
    //   confirmButtonText:
    //     'Continue <i class="fa fa-arrow-right"></i>',
    //   inputValidator: (result) => {
    //     return !result && 'You need to agree with T&C'
    //   }
    //   })

    //   if (accept) {
    //     Swal.fire('You agreed with T&C :)')
    //   };

      this.route.navigate(['/login']);
    }),
    (error:any)=>{
      console.log(error);
    };
      /*console.log("we",data)*/
    }else{
      Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Algo salio mal, intentalo de nuevo',
      showConfirmButton: false,
      timer: 2500
      })
      console.log("Form error");
    }
  }
}
