import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
  private alumnosSubject = new BehaviorSubject<Alumno[]>([]);
  private searchTermSubject = new BehaviorSubject<string>('');

  constructor() {
    const savedSearchTerm = typeof window !== 'undefined' && localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.searchTermSubject.next(savedSearchTerm); 
    }

    if (typeof window !== 'undefined' && localStorage) {
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
      this.alumnosSubject.next(this.alumnos);
    }
  }

  obtenerAlumnos() {
    return this.alumnosSubject.asObservable().pipe(
      map((alumnos) => {
        const searchTerm = this.searchTermSubject.value.toLowerCase();
        return alumnos.filter(alumno => 
          `${alumno.nombre} ${alumno.apellido}`.toLowerCase().includes(searchTerm)
        );
      })
    );
  }

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.guardarAlumnos();
    this.alumnosSubject.next(this.alumnos);
  }

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('searchTerm', term); 
    }
  }

  private guardarAlumnos() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    }
  }
}
