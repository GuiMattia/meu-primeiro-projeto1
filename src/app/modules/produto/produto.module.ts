import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListaComponent } from './pages/produto-lista/produto-lista.component';
import { GenericRouterComponent } from '../produto/produto-routing.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoCadastrarComponent } from './pages/produto-cadastrar/produto-cadastrar.component';
import { FormsModule } from '@angular/forms';
import { ProdutoAtualizarComponent } from './pages/produto-atualizar/produto-atualizar.component';
import { ProdutoVisualizarComponent } from './pages/produto-visualizar/produto-visualizar.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProdutoListaComponent,
    ProdutoCadastrarComponent,
    ProdutoAtualizarComponent,
    ProdutoVisualizarComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
