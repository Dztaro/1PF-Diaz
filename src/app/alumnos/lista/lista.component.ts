import { Component, OnDestroy } from '@angular/core';
import { AlumnosService } from '../../servicios/alumnos.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: false,

})
export class ListaComponent implements OnDestroy {
  alumnos$ = new MatTableDataSource<any>([]); 
  searchTerm: string = '';
  private searchTermSub: Subscription;

  constructor(private alumnosService: AlumnosService) {
    this.alumnosService.obtenerAlumnos().subscribe(alumnos => {
      this.alumnos$ = new MatTableDataSource(alumnos || []);
    });

    
    this.searchTermSub = this.alumnosService.obtenerAlumnos().subscribe();
  }

  ngOnDestroy() {
    if (this.searchTermSub) {
      this.searchTermSub.unsubscribe(); 
    }
  }

  onSearchChange() {
    this.alumnosService.setSearchTerm(this.searchTerm); 
  }
}

