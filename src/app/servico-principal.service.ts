import { Injectable } from '@angular/core';
import { Animal } from './model/animal';
import { Dono } from './model/dono';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrincipalService {

  listaDono: Array<any> = []
  listaAnimal:Array<any> = []

  constructor() { }

  salvarDono(dono: Dono){
    
    this.listaDono.push({...dono})
  }

  salvaAnimal(animal: Animal){
    this.listaAnimal.push({...animal})
  }
}
