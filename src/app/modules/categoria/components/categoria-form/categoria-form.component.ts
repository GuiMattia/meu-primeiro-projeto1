import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategoria } from '../../model/categoria.model';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  constructor() { }

  @Input()
  categoria = {} as ICategoria;

  @Output()
  private salvarCategoriaEventPublisher = new EventEmitter<ICategoria>();

  @Output()
  private limpaErroEventPublisher = new EventEmitter();

  ngOnInit(): void {
    console.log(this.categoria);
  }

  salvar() {
    this.salvarCategoriaEventPublisher.emit(this.categoria);
  }

  disabled() {
    return !this.categoria.descricao || this.categoria.descricao.length > 30;
  }

  limpaErro() {
    this.limpaErroEventPublisher.emit();
  }


}
