import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-abm',
  standalone: false,
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  guardarAlumno() {
    if (this.formulario.valid) {
      const nuevoAlumno = this.formulario.value;
      this.alumnosService.agregarAlumno(nuevoAlumno); // Guardar el alumno en el servicio
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}

