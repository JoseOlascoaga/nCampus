import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActestuComponent } from './paginas/actestu/actestu.component';
import { ConsultasestudiantesComponent } from './paginas/consultasestudiantes/consultasestudiantes.component';
import { ConsultsaprofeComponent } from './paginas/consultsaprofe/consultsaprofe.component';
import { GestionasistenciaComponent } from './paginas/gestionasistencia/gestionasistencia.component';
import { GestionnotasComponent } from './paginas/gestionnotas/gestionnotas.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { VeralumnosComponent } from './paginas/veralumnos/veralumnos.component';
import { VerasignaturasComponent } from './paginas/verasignaturas/verasignaturas.component';
import { VernotasComponent } from './paginas/vernotas/vernotas.component';


const routes: Routes = [
{path:'',redirectTo:'/principal',pathMatch:'full'},
{path: 'principal', component:PrincipalComponent},
{path: 'consultasestudiantes', component:ConsultasestudiantesComponent},
{path: 'verasignaturas', component:VerasignaturasComponent},
{path: 'actuest', component:ActestuComponent},
{path: 'vernotas', component:VernotasComponent},
{path: 'consultasprofe', component:ConsultsaprofeComponent},
{path: 'veralumnos', component:VeralumnosComponent},
{path: 'gestionnotas', component:GestionnotasComponent},
{path: 'gestionasistencia', component:GestionasistenciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
