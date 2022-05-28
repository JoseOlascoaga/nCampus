import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { ServiciosService } from 'src/app/servicios/servicios.service';


@Component({
  selector: 'app-verasignaturas',
  templateUrl: './verasignaturas.component.html',
  styleUrls: ['./verasignaturas.component.css']
})
export class VerasignaturasComponent implements OnInit {

  myform:FormGroup
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private servicios: ServiciosService) { 
    this.myform=this._builder.group({
      nombreAsig: ['', [Validators.required, Validators.maxLength(50)]] ,
      jornada: ['', [Validators.required, Validators.maxLength(50)]] ,
    })
  }

  lista_asignaturas: any;

  ngOnInit(): void {
    this.recuperarTodosAsignaturas();
  }

  recuperarTodosAsignaturas(){
    this.servicios.recuperarTodosAsignaturas().subscribe(result => this.lista_asignaturas = result);
  }

}
