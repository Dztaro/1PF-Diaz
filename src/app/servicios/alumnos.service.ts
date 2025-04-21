import { Injectable } from '@angular/core';

export interface Alumno {
  nombre: string;
  apellido: string;
  curso: string;
  fechaNacimiento: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [];

  constructor() {
    const alumnosGuardados = localStorage.getItem('alumnos');
    if (alumnosGuardados) {
      this.alumnos = JSON.parse(alumnosGuardados);
    } else {
      this.alumnos = [
        { nombre: 'Felix', apellido: 'Cruz', curso: 'Matemáticas', fechaNacimiento: '2000-01-01' },
        { nombre: 'Valentino', apellido: 'Siles', curso: 'Historia', fechaNacimiento: '2001-02-15' },
        { nombre: 'Leandro', apellido: 'Paulise', curso: 'Ciencias', fechaNacimiento: '1999-07-10' }
      ];
      this.guardarAlumnos(); 
    }
  }

  obtenerAlumnos() {
    return this.alumnos;
  }

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.guardarAlumnos(); 
  }

  private guardarAlumnos() {
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
  }
}


