import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dono } from '../model/dono';
import { ServicoPrincipalService } from '../servico-principal.service';

@Component({
  selector: 'app-dono',
  templateUrl: './dono.component.html',
  styleUrls: ['./dono.component.css']
})
export class DonoComponent implements OnInit {

  dono = new Dono()
  donoLista: Array<any>

  constructor(private service: ServicoPrincipalService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    nome: new FormControl('', Validators.minLength(2)),
    cpf: new FormControl('', Validators.minLength(2)),
    endereco: new FormControl('', Validators.minLength(2)),
    telefone: new FormControl('', Validators.minLength(2)),
  })

  salvarDono(){
    this.dono.nome = this.form.value.nome
    this.dono.cpf = this.form.value.cpf
    this.dono.endereco = this.form.value.endereco
    this.dono.telefone = this.form.value.telefone
    console.log(this.dono)
    this.service.salvarDono(this.dono)
  }

}
