import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vacina } from '../model/vacina';
import { ServicoPrincipalService } from '../servico-principal.service';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {

  vacina = new Vacina()

  form = new FormGroup({
    descricao: new FormControl('',Validators.minLength(2))
  })

  constructor(private service: ServicoPrincipalService) { }

  ngOnInit() {
  }

  salvaVaciana(){
    this.vacina.descricao = this.form.value.descricao
    this.service.salvarVacina(this.vacina)
  }

}
