import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './alumnos/abm/abm.component';
import { ListaComponent } from './alumnos/lista/lista.component';

const routes: Routes = [
  { path: 'alumnos', component: ListaComponent },
  { path: 'alumnos/abm', component: AbmComponent },
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: '**', redirectTo: 'alumnos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

