import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Animal } from '../model/animal';
import { ServicoPrincipalService } from '../servico-principal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal = new Animal()
  animalLista: Array<any>

  constructor(private service: ServicoPrincipalService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    nome: new FormControl('',Validators.minLength(2)),
    raca: new FormControl('', Validators.minLength(2)),
    dono: new FormControl('',Validators.minLength(2))
  })

  salvaAnimal(){
    this.animal.nome = this.form.value.nome
    this.animal.raca = this.form.value.raca
    this.animal.dono = this.form.value.dono

    this.service.salvaAnimal(this.animal)
  }

}
