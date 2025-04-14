import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  alumnos = [
    { nombre: 'Felix', apellido: 'Cruz', curso: 'Matemáticas', fechaNacimiento: '2000-01-01' },
    { nombre: 'Valentino', apellido: 'Siles', curso: 'Historia', fechaNacimiento: '2001-02-15' },
    { nombre: 'Leandro', apellido: 'Paulise', curso: 'Ciencias', fechaNacimiento: '1999-07-10' }
  ];
}
