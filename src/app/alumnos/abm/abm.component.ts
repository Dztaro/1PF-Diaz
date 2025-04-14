import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abm',
  standalone: false,
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      curso: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  guardarAlumno() {
    if (this.formulario.valid) {
      console.log('Alumno guardado:', this.formulario.value);
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}

