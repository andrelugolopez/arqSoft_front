import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
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
    this.changeInput()
  }
  
  changeInput(){
    let data={
      cedula:this.form.value.cedula,
      nombres:this.form.value.nombres,
      apellidos:this.form.value.apellidos,
      email:this.form.value.email,
      telefono:this.form.value.telefono,
      direccion:this.form.value.direccion,
      rol:this.form.value.rol
    }

    this.router.paramMap
      .subscribe((params : ParamMap) => {

      this.client.getRequest(`http://127.0.0.1:5000/consultaUsuario?documento=`+localStorage.getItem('courrentDoc'))
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
      "documento": "cedula",
      "nombres": "nombres",
      "apellidos": "apellidos",
      "correo": "email",
      "telefono": "telefono",
      "direccion": "direccion",
      "rol": "rol",
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
