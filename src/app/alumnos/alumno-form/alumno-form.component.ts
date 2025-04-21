import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  standalone: false,
})
export class AlumnoFormComponent {
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  guardarAlumno() {
    if (this.alumnoForm.valid) {
      console.log("Alumno guardado:", this.alumnoForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
