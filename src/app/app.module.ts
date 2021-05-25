import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VacinaComponent } from './vacina/vacina.component';
import { BanhoComponent } from './banho/banho.component';
import { ServicoPrincipalService } from './servico-principal.service';
import { AnimalComponent } from './animal/animal.component';
import { DonoComponent } from './dono/dono.component';
import { CaixaComponent } from './caixa/caixa.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VacinaComponent,
    BanhoComponent,
    AnimalComponent,
    DonoComponent,
    CaixaComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicoPrincipalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
