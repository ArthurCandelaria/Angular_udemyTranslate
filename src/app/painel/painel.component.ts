import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { frases } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public instrucao = 'Traduza a frase';
  public frases: Frase[] = frases;
  public resposta: string;

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  // tslint:disable-next-line: align
  public atualizaFrase(resposta: Event): void {
    this.resposta = ((resposta.target as HTMLInputElement).value);
    // console.log(this.resposta);
  }

  public verificarFrase(): void {
    // tslint:disable-next-line: triple-equals
    if (this.resposta.toUpperCase() == this.rodadaFrase.frasePtBr.toUpperCase()) {

      alert('Correto');

      this.rodada = this.rodada + 1;
      this.progresso = this.progresso + (100 / this.frases.length);

      this.rodadaFrase = frases[this.rodada];

      alert('Correto');

      // document.querySelector('#box-textarea').value = '';

    } else {
      alert('Errado');
    }

  }

}
