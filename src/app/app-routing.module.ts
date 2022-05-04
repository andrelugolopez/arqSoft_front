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



const routes: Routes = [
  {path:'', component: ContenedorIndexComponent },
  {path:'equipos', component: ContenedorEquiposComponent },
  {path:'carrito', component: ContenedorCarritoComponent },
  {path:'factura', component: ContenedorFacturaComponent },
  {path:'login', component: ContenedorLoginComponent },
  {path:'perifericos', component: ContenedorPerifericosComponent },
  {path:'registro', component: ContenedorRegistroComponent },
  {path:'repuestos', component: ContenedorRepuestosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
