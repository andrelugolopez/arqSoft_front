import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

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

      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro exitoso',
      showConfirmButton: false,
      timer: 2500
      });
      let data={
        email:this.form.value.email,
        nombres:this.form.value.nombres,
        apellidos:this.form.value.apellidos,
        password:this.form.value.password,
        cedula:this.form.value.cedula
      }

    this.client.postRequest(environment.url+"/register",data
    ).subscribe(

    async (response:any)=>{
      console.log(response)
     //Acuerdo de confidencialidad
     const { value: accept } = await Swal.fire({
      title: 'Términos y condiciones de datos',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder:'Terminos y Condiciones',
      confirmButtonColor:'#E7700F',
      confirmButtonText:'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result:any) => {
        return !result && 'Está de acuerdo con los términos y condiciones'
      }
    })
    
    if (accept) {
      Swal.fire('Acepta términos para continuar :)')
    }


      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 2000
      })

      this.route.navigate(['/login']);
      
    }),
    (error:any)=>{
      console.log(error);
    };
    console.log("Form error");
    }else{
      Swal.fire({

        position: 'top-left',
        icon: 'error',
        title: 'Algo salió mal, inténtanto de nuevo',
        showConfirmButton: false,
        timer: 2000
      })
      
      this.route.navigate(['/login']);
      

      console.log("Form error");

    }
  }
}
