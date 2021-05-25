import { Component } from '@angular/core';
import { ServicoPrincipalService } from './servico-principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventoBotao: any = "dono";
  
  constructor(private service: ServicoPrincipalService) { 
  
  }

  ngOnInit() {
  }

  eventoBotaService(evento: String){
    this.eventoBotao = evento;
  }
  
}
