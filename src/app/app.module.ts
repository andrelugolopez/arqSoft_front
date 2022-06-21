import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LoginComponent } from './components/login/login.component';
import { FacturaComponent } from './components/factura/factura.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { QuienesomosComponent } from './components/quienesomos/quienesomos.component';
import { RedesocialesComponent } from './components/redesociales/redesociales.component';
import { ContenedorIndexComponent } from './components/contenedor-index/contenedor-index.component';
import { ContenedorCarritoComponent } from './components/contenedor-carrito/contenedor-carrito.component';
import { ContenedorEquiposComponent } from './components/contenedor-equipos/contenedor-equipos.component';
import { ContenedorFacturaComponent } from './components/contenedor-factura/contenedor-factura.component';
import { ContenedorLoginComponent } from './components/contenedor-login/contenedor-login.component';
import { ContenedorRegistroComponent } from './components/contenedor-registro/contenedor-registro.component';
import { InfoTiendaComponent } from './components/info-tienda/info-tienda.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { ContenedorPerifericosComponent } from './components/contenedor-perifericos/contenedor-perifericos.component';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { ContenedorRepuestosComponent } from './components/contenedor-repuestos/contenedor-repuestos.component';
import { ContenedorMenutiendaComponent } from './components/contenedor-menutienda/contenedor-menutienda.component';
import { CardAccesoriosComponent } from './components/card-accesorios/card-accesorios.component';
import { CardEquiposComponent } from './components/card-equipos/card-equipos.component';
import { CardRepuestosComponent } from './components/card-repuestos/card-repuestos.component';
import { CardSoporteComponent } from './components/card-soporte/card-soporte.component';
import { FranjaServiciosComponent } from './components/franja-servicios/franja-servicios.component';
import { FranjaQuienesComponent } from './components/franja-quienes/franja-quienes.component';
import { CardContactanosUComponent } from './components/card-contactanos-u/card-contactanos-u.component';
import { CardConsultarUComponent } from './components/card-consultar-u/card-consultar-u.component';
import { ContenedorAsistenciausuarioComponent } from './components/contenedor-asistenciausuario/contenedor-asistenciausuario.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { ContenedorHistoricoComponent } from './components/contenedor-historico/contenedor-historico.component';
import { CardArticulostiendaComponent } from './components/card-articulostienda/card-articulostienda.component';
import { CardAdminrolesComponent } from './components/card-adminroles/card-adminroles.component';
import { CardOrdenservicioComponent } from './components/card-ordenservicio/card-ordenservicio.component';
import { CardHistoricosComponent } from './components/card-historicos/card-historicos.component';
import { ContenedorAsistenciatenicadminComponent } from './components/contenedor-asistenciatenicadmin/contenedor-asistenciatenicadmin.component';
import { ContenedorAsignacionTecnicoComponent } from './components/contenedor-asignacion-tecnico/contenedor-asignacion-tecnico.component';
import { AsignacionTecnicoComponent } from './components/asignacion-tecnico/asignacion-tecnico.component';
import { OrdenServicioComponent } from './components/orden-servicio/orden-servicio.component';
import { ContenedorOrdenServicioComponent } from './components/contenedor-orden-servicio/contenedor-orden-servicio.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ContenedorDetalleProductoComponent } from './components/contenedor-detalle-producto/contenedor-detalle-producto.component';
import { ContenedorNuevaContrasenaComponent } from './components/contenedor-nueva-contrasena/contenedor-nueva-contrasena.component';
import { NuevaContrasenaComponent } from './components/nueva-contrasena/nueva-contrasena.component';
import { ContenedorOlvideContrasenaComponent } from './components/contenedor-olvide-contrasena/contenedor-olvide-contrasena.component';
import { OlvideContrasenaComponent } from './components/olvide-contrasena/olvide-contrasena.component';
import { PrincipalesmarcasComponent } from './components/principalesmarcas/principalesmarcas.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { ContenedorContactoUsuarioComponent } from './components/contenedor-contacto-usuario/contenedor-contacto-usuario.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ContenedorMapaComponent } from './components/contenedor-mapa/contenedor-mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RegistroComponent,
    EquiposComponent,
    LoginComponent,
    FacturaComponent,
    CarritoComponent,
    QuienesomosComponent,
    RedesocialesComponent,
    ContenedorIndexComponent,
    ContenedorCarritoComponent,
    ContenedorEquiposComponent,
    ContenedorFacturaComponent,
    ContenedorLoginComponent,
    ContenedorRegistroComponent,
    InfoTiendaComponent,
    BannerComponent,
    PerifericosComponent,
    ContenedorPerifericosComponent,
    RepuestosComponent,
    ContenedorRepuestosComponent,
    ContenedorMenutiendaComponent,
    CardAccesoriosComponent,
    CardEquiposComponent,
    CardRepuestosComponent,
    CardSoporteComponent,
    FranjaServiciosComponent,
    FranjaQuienesComponent,
    CardContactanosUComponent,
    CardConsultarUComponent,
    ContenedorAsistenciausuarioComponent,
    HistoricoComponent,
    ContenedorHistoricoComponent,
    CardArticulostiendaComponent,
    CardAdminrolesComponent,
    CardOrdenservicioComponent,
    CardHistoricosComponent,
    ContenedorAsistenciatenicadminComponent,
    ContenedorAsignacionTecnicoComponent,
    AsignacionTecnicoComponent,
    OrdenServicioComponent,
    ContenedorOrdenServicioComponent,
    DetalleProductoComponent,
    ContenedorDetalleProductoComponent,
    ContenedorNuevaContrasenaComponent,
    NuevaContrasenaComponent,
    ContenedorOlvideContrasenaComponent,
    OlvideContrasenaComponent,
    PrincipalesmarcasComponent,
    FormularioContactoComponent,
    ContenedorContactoUsuarioComponent,
    MapaComponent,
    ContenedorMapaComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
