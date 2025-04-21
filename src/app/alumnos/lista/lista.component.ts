import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: false,
})
export class ListaComponent implements OnInit {
  alumnos: any[] = []; 

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }
}
