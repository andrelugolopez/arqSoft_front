import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';

@Component({
  selector: 'app-administrador-roles',
  templateUrl: './administrador-roles.component.html',
  styleUrls: ['./administrador-roles.component.css']
})
export class AdministradorRolesComponent implements OnInit {

  usuarios: any

  form: FormGroup = this.fb.group({/*se inicializa el form*/
  cedula: ['', Validators.required],
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  email: ['', Validators.required],
  telefono: ['', Validators.required],
  direccion: ['', Validators.required],
  rol: ['', Validators.required],
  });

  constructor(
    private client: ClientService,
    private fb: FormBuilder, /*inyeccion de independencias*/
    private route: Router ,
    public router: ActivatedRoute,
    public autorizacion: AutorizacionService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      let data={
        cedula:this.form.value.cedula,
        nombres:this.form.value.nombres,
        apellidos:this.form.value.apellidos,
        email:this.form.value.email,
        telefono:this.form.value.telefono,
        direccion:this.form.value.direccion,
        rol:this.form.value.rol
      }

      console.log("token",this.autorizacion.getToken())

      this.client.postRequest('http://127.0.0.1:5000/actualizarUsuario',data,this.autorizacion.getToken())
      .subscribe(
        (data:any) => {
          console.log(data["data"]),
          this.route.navigate(['/']);
        },
        (error:any)=>{
          console.log(error)
        });

      
      console.log("prueba",data.cedula)

      }else{
        console.log("Form error");
      }
    }

    changeInput(){
    this.router.paramMap
      .subscribe((params : ParamMap) => {

      this.client.getRequest(`http://127.0.0.1:5000/consultaUsuario?documento=`+this.form.value.cedula)
      .pipe()
      .subscribe(
        (data: any) => {
          this.usuarios = this.fillForm(data["data"]),
          console.log(data)
          },
          error => console.log("Ha ocurrido un error en la llamada: ", error)
          )
        });
    }

    public fillForm(values: any) {
    // Diccionario
    // Convierto las llaves de value a las llaves de form
    const valueToForm: {[key: string]: string} = {
      "cedula": "cedula",
      "nombres": "nombres",
      "apellidos": "apellidos",
      "correo": "email",
      "telefono": "telefono",
      "direccion": "direccion",
    }
    Object.entries(values).forEach(([name, value]) => {
      // Obtengo la llave del formulario desde los values
      // correo -> email
      const formKey = valueToForm[name];

      // Obtengo el control del formulario
      const control = this.form.get(formKey) as FormControl;

      // Si el control no existe o está modificado, retorno
      if (!control || control.dirty) return;

      // Defino el valor al control del formulario
      control!.setValue(value);
    });
    }
    }











