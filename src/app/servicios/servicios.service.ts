import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url='http://127.0.0.1:3000/';
  constructor(private http: HttpClient) { }

  //ASIGNATURA
  recuperarTodosAsignaturas(){
    return this.http.get(`${this.url}getAllasignaturas`);
  }
  recuperarTodosNotas(){
    return this.http.get(`${this.url}getAllnotas`);
  }
}
