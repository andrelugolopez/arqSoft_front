import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

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

  Crear(){
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
      console.log("entra a crear")

      this.client.postRequest(environment.url+'/registerAdmin',data,this.autorizacion.getToken())
      .subscribe(
        async(data:any) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Rol creado satisfactoriamente'
          })

          this.route.navigate(['/asistenciatenicadmin']);
        },
        (error:any)=>{

          console.log(error)
        });

      
      console.log("prueba",data.cedula)

      }else{
        console.log("Form error");
      }
    }


  Eliminar(){
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
      console.log("entra a eliminar")
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })

      this.client.getRequest(environment.url+'/eliminaruser', this.autorizacion.getToken() , this.form.value.email)
      .subscribe(
        (data:any) => {
          Swal.fire({
            title: '??Est?? seguro?',
            text: "De lo contrario no puede revertir cambios",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#E7700F',
            cancelButtonColor: '#9fd5d1',
            confirmButtonText: 'si, Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Hecho!',
                'Ha sido actualizado.',
                'success'
              )
            }
          })
          
          console.log(data["data"]),
          this.route.navigate(['/asistenciatenicadmin']);
        },
        (error:any)=>{
          console.log(error)
        });

      
      console.log("prueba",data.cedula)

      }else{
        console.log("Form error");
          //   const { value: password } = await Swal.fire({
          //   title: 'Enter your password',
          //   input: 'password',
          //   inputLabel: 'Password',
          //   inputPlaceholder: 'Enter your password',
          //   inputAttributes: {
          //     maxlength: 10,
          //     autocapitalize: 'off',
          //     autocorrect: 'off'
          //   }
          // })

          // if (password) {
          //   Swal.fire(`Entered password: ${password}`)
          // }
      }
    }

  Modificar(){
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

      // const swalWithBootstrapButtons = Swal.mixin({
      //   customClass: {
      //     confirmButton: 'btn btn-success',
      //     cancelButton: 'btn btn-danger'
      //   },
      //   buttonsStyling: false
      // })

      // swalWithBootstrapButtons.fire({
      //   title: 'Are you sure?',
      //   text: "You won't be able to revert this!",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonText: 'Yes, delete it!',
      //   cancelButtonText: 'No, cancel!',
      //   reverseButtons: true
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     swalWithBootstrapButtons.fire(
      //       'Deleted!',
      //       'Your file has been deleted.',
      //       'success'
      //     )
      //   } else if (
      //     /* Read more about handling dismissals below */
      //     result.dismiss === Swal.DismissReason.cancel
      //   ) {
      //     swalWithBootstrapButtons.fire(
      //       'Cancelled',
      //       'Your imaginary file is safe :)',
      //       'error'
      //     )
      //   }
      // })

      this.client.postRequest(environment.url+'/actualizarUsuario',data,this.autorizacion.getToken())
      .subscribe(
        (data:any) => {
          console.log(data["data"]),
          Swal.fire({
            title: 'Est?? seguro?',
            text: "De lo contrario no puede revertir cambios",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#E7700F',
            cancelButtonColor: '#9fd5d1',
            confirmButtonText: 'si, actualizar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Hecho!',
                'El rol ha sido actualizado.',
                'success'
              )
            }
          })
          
          this.route.navigate(['/asistenciatenicadmin']);
        },
        (error:any)=>{
          console.log(error)
        });

      
      console.log("prueba",data.cedula)

      }else{

          //   const { value: password } = await Swal.fire({
          //   title: 'Enter your password',
          //   input: 'password',
          //   inputLabel: 'Password',
          //   inputPlaceholder: 'Enter your password',
          //   inputAttributes: {
          //     maxlength: 10,
          //     autocapitalize: 'off',
          //     autocorrect: 'off'
          //   }
          // })

          // if (password) {
          //   Swal.fire(`Entered password: ${password}`)
          // }
          
        console.log("Form error");
      }
    }

    changeInput(){
    this.router.paramMap
      .subscribe((params : ParamMap) => {

      this.client.getRequest(environment.url+`/consultaUsuario?documento=`+this.form.value.cedula)
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

      // Si el control no existe o est?? modificado, retorno
      if (!control || control.dirty) return;

      // Defino el valor al control del formulario
      control!.setValue(value);
    });
    }
    }











