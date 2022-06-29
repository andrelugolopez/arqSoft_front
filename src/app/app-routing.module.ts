import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorIndexComponent } from './components/contenedor-index/contenedor-index.component';
import { ContenedorEquiposComponent } from './components/contenedor-equipos/contenedor-equipos.component';
import { ContenedorCarritoComponent } from './components/contenedor-carrito/contenedor-carrito.component';
import { ContenedorFacturaComponent } from './components/contenedor-factura/contenedor-factura.component';
import { ContenedorLoginComponent } from './components/contenedor-login/contenedor-login.component';
import { ContenedorPerifericosComponent } from './components/contenedor-perifericos/contenedor-perifericos.component';
import { ContenedorRegistroComponent } from './components/contenedor-registro/contenedor-registro.component';
import { ContenedorRepuestosComponent } from './components/contenedor-repuestos/contenedor-repuestos.component';
import { ContenedorMenutiendaComponent } from './components/contenedor-menutienda/contenedor-menutienda.component';
import { ContenedorAsistenciausuarioComponent } from './components/contenedor-asistenciausuario/contenedor-asistenciausuario.component';
import { ContenedorAsistenciatenicadminComponent } from './components/contenedor-asistenciatenicadmin/contenedor-asistenciatenicadmin.component';
import { ContenedorHistoricoComponent } from './components/contenedor-historico/contenedor-historico.component';
import { ContenedorOrdenServicioComponent } from './components/contenedor-orden-servicio/contenedor-orden-servicio.component';
import { ContenedorAsignacionTecnicoComponent } from './components/contenedor-asignacion-tecnico/contenedor-asignacion-tecnico.component';
import { ContenedorDetalleProductoComponent } from './components/contenedor-detalle-producto/contenedor-detalle-producto.component';
import { ContenedorNuevaContrasenaComponent } from './components/contenedor-nueva-contrasena/contenedor-nueva-contrasena.component';
import { ContenedorOlvideContrasenaComponent } from './components/contenedor-olvide-contrasena/contenedor-olvide-contrasena.component';
import { ContenedorContactoUsuarioComponent } from './components/contenedor-contacto-usuario/contenedor-contacto-usuario.component';
import { ContenedorMapaComponent } from './components/contenedor-mapa/contenedor-mapa.component';
import { ContenedorAdministradorRolComponent } from './components/contenedor-administrador-rol/contenedor-administrador-rol.component';
import { ContenedorHistoricoAdminComponent } from './components/contenedor-historico-admin/contenedor-historico-admin.component';
import { ContenedorAdminArticulosComponent } from './components/contenedor-admin-articulos/contenedor-admin-articulos.component';
import { ContenedorCerrarOrdenComponent } from './components/contenedor-cerrar-orden/contenedor-cerrar-orden.component';
import { ContendorMediospagoComponent } from './components/contendor-mediospago/contendor-mediospago.component';
import { ContenedorPerfilComponent } from './components/contenedor-perfil/contenedor-perfil.component';


const routes: Routes = [
  {path:'', component: ContenedorIndexComponent },
  {path:'equipos', component: ContenedorEquiposComponent },
  {path:'carrito', component: ContenedorCarritoComponent },
  {path:'factura', component: ContenedorFacturaComponent },
  {path:'login', component: ContenedorLoginComponent },
  {path:'perifericos', component: ContenedorPerifericosComponent },
  {path:'registro', component: ContenedorRegistroComponent },
  {path:'repuestos', component: ContenedorRepuestosComponent },
  {path:'menu-tienda', component: ContenedorMenutiendaComponent },
  {path:'asistenciausuario', component: ContenedorAsistenciausuarioComponent},
  {path:'asistenciatenicadmin', component: ContenedorAsistenciatenicadminComponent},
  {path:'historico', component: ContenedorHistoricoComponent},
  {path:'ordenServicio', component: ContenedorOrdenServicioComponent},
  {path:'asignacionTecnico', component: ContenedorAsignacionTecnicoComponent},
  {path:'detalleProducto/:idproducto', component: ContenedorDetalleProductoComponent},
  {path:'nuevaContrasena', component: ContenedorNuevaContrasenaComponent},
  {path:'olvideContrasena', component: ContenedorOlvideContrasenaComponent},
  {path:'contacto-usuario', component: ContenedorContactoUsuarioComponent},
  {path:'mapa', component: ContenedorMapaComponent},
  {path:'administrador-rol', component: ContenedorAdministradorRolComponent},
  {path:'historico-admin', component: ContenedorHistoricoAdminComponent},
  {path:'admin-articulos', component:ContenedorAdminArticulosComponent},
  {path:'cerrar-orden',component:ContenedorCerrarOrdenComponent},
  {path:'mediospago',component:ContendorMediospagoComponent},
  {path:'perfil',component:ContenedorPerfilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
