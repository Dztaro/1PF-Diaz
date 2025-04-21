import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto',
  standalone: false,
})
export class NombreCompletoPipe implements PipeTransform {
  transform(value: { nombre: string; apellido: string }): string {
    return `${value.nombre} ${value.apellido}`;
  }
}


