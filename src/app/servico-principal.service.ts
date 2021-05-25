import { Injectable } from '@angular/core';
import { Animal } from './model/animal';
import { Dono } from './model/dono';
import { Vacina } from './model/vacina';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrincipalService {

  listaDono: Array<any> = []
  listaAnimal:Array<any> = []
  listaVacina: Array<any> = []

  constructor() { }

  salvarDono(dono: Dono){
    this.listaDono.push({...dono})
  }

  salvaAnimal(animal: Animal){
    this.listaAnimal.push({...animal})
  }

  salvarVacina(vacina: Vacina){
    this.listaVacina.push({...vacina})
  }
}
