import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PieComponent } from './componentes/pie/pie.component';
import { ConsultasestudiantesComponent } from './paginas/consultasestudiantes/consultasestudiantes.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { VerasignaturasComponent } from './paginas/verasignaturas/verasignaturas.component';
import { ActestuComponent } from './paginas/actestu/actestu.component';
import { VernotasComponent } from './paginas/vernotas/vernotas.component';
import { MenuprofeComponent } from './componentes/menuprofe/menuprofe.component';
import { ConsultsaprofeComponent } from './paginas/consultsaprofe/consultsaprofe.component';
import { VeralumnosComponent } from './paginas/veralumnos/veralumnos.component';
import { GestionnotasComponent } from './paginas/gestionnotas/gestionnotas.component';
import { GestionasistenciaComponent } from './paginas/gestionasistencia/gestionasistencia.component';






@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PieComponent,
    ConsultasestudiantesComponent,
    MenuComponent,
    VerasignaturasComponent,
    ActestuComponent,
    VernotasComponent,
    MenuprofeComponent,
    ConsultsaprofeComponent,
    VeralumnosComponent,
    GestionnotasComponent,
    GestionasistenciaComponent,
    
    
  ],
  imports: [
    
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
