import { NgModule } from '@angular/core';
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




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
