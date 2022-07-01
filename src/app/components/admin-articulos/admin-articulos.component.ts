import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { AutorizacionService } from '../../services/autorizacion.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-admin-articulos',
  templateUrl: './admin-articulos.component.html',
  styleUrls: ['./admin-articulos.component.css']
})
export class AdminArticulosComponent implements OnInit {

  infoEquipos: any
  producto: any

  
  form: FormGroup = this.fb.group({/*se inicializa el form*/
  idproducto: ['', Validators.required],
  tipodispositivo: ['', Validators.required],
  descripcionproductos: ['', Validators.required],
  cantidad: ['', Validators.required],
  nombre: ['', Validators.required],
  precio: ['', Validators.required],
  imagen: ['', Validators.required],

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
        idproducto:this.form.value.idproducto,
        tipodispositivo:this.form.value.tipodispositivo,
        descripcionproductos:this.form.value.descripcionproductos,
        cantidad:this.form.value.cantidad,
        nombre:this.form.value.nombre,
        precio:this.form.value.precio,
        imagen:this.form.value.imagen
      }

      this.client.postRequest(environment.url+'/crearproducto',data,this.autorizacion.getToken())
      .subscribe(
        async(data:any) => {
          console.log(data["data"])
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
            title: 'Producto creado satisfactoriamente'
          })
          
          this.route.navigate(['/asistenciatenicadmin']);
        },
        (error:any)=>{
          console.log(error)
        });

      }else{
          
        console.log("Form error");
      }
    }

    Actualizar(){
      if(this.form.valid){
        let data={
          idproducto:this.form.value.idproducto,
          tipodispositivo:this.form.value.tipodispositivo,
          descripcionproductos:this.form.value.descripcionproductos,
          cantidad:this.form.value.cantidad,
          nombre:this.form.value.nombre,
          precio:this.form.value.precio,
          imagen:this.form.value.imagen
        }
       

        console.log("token",this.autorizacion.getToken())
  
        this.client.postRequest(environment.url+'/actualizarProducto',data,this.autorizacion.getToken())
        .subscribe(
          (data:any) => {
            console.log(data["data"]),
            Swal.fire({
              title: 'Está seguro?',
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
                  'El producto ha sido actualizado.',
                  'success'
                )
              }
            })
            
            this.route.navigate(['/asistenciatenicadmin']);
          },
          (error:any)=>{
            console.log(error)
          });
  
        }else{
         
          console.log("Form error");
        }
      }

  Eliminar(){
    if(this.form.valid){
      let data={
        idproducto:this.form.value.idproducto,
        tipodispositivo:this.form.value.tipodispositivo,
      }
      console.log()

      this.router.paramMap
      .subscribe((params : ParamMap) => {

      const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: "No se pueden deshacer los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E7700F',
      cancelButtonColor: '#9fd5d1',
      confirmButtonText: 'Sí, Elimiar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El artículo fue eliminado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelar',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })  

      this.client.getRequest(environment.url+'/eliminarproducto?idproe='+this.form.value.tipodispositivo+this.form.value.idproducto,this.autorizacion.getToken())
      .pipe()
      .subscribe(
        (data: any) => {
          this.producto = this.fillForm(data["data"]),
          this.route.navigate(['/asistenciatenicadmin']);
          console.log(this.producto)
          },
          error => console.log("Ha ocurrido un error en la llamada: ", error)
          )
        });

      }else{
          
        console.log("Form error");
      }
    }



  consultar(){
    this.router.paramMap
      .subscribe((params : ParamMap) => {

      this.client.getRequest(environment.url+`/productoId?idproducto=`+this.form.value.tipodispositivo+this.form.value.idproducto)
      .pipe()  
      .subscribe(
        (data: any) => {
          this.infoEquipos = this.fillForm(data["data"]),
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


      "descripcionproductos": "descripcionproductos",
      "cantidad": "cantidad",
      "nombre": "nombre",
      "precio": "precio",
      "rutaimagen": "imagen",

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
