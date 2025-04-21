import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbmComponent } from './alumnos/abm/abm.component';
import { ListaComponent } from './alumnos/lista/lista.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AlumnoFormComponent } from './alumnos/alumno-form/alumno-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TituloGrandeDirective } from './directives/titulo-grande.directive';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AbmComponent,
    ListaComponent,
    ToolbarComponent,
    SidebarComponent,
    AlumnoFormComponent,
    NombreCompletoPipe,
    TituloGrandeDirective,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
