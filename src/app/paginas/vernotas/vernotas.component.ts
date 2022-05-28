import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-vernotas',
  templateUrl: './vernotas.component.html',
  styleUrls: ['./vernotas.component.css']
})
export class VernotasComponent implements OnInit {

  myform:FormGroup
  id_editar:number=0;
  constructor(private _builder:FormBuilder,private servicios: ServiciosService) { 
    this.myform=this._builder.group({
      corteuno: ['', [Validators.required]] ,
      cortedos: ['', [Validators.required]] ,
      cortetres: ['', [Validators.required]] ,

    })
  }

  lista_notas: any;

  ngOnInit(): void {
    this.recuperarTodosNotas();
  }

  recuperarTodosNotas(){
    this.servicios.recuperarTodosNotas().subscribe(result => this.lista_notas = result);
  }

}
