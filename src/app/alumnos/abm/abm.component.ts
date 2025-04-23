import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss'],
  standalone: false,
})
export class AbmComponent {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService
  ) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      curso: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  guardarAlumno() {
    if (this.formulario.valid) {
      const nuevoAlumno = this.formulario.value;
      this.alumnosService.agregarAlumno(nuevoAlumno);
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}


