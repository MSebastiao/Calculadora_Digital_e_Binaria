import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-calc-digital',
  templateUrl: './calc-digital.component.html',
  styleUrls: ['./calc-digital.component.css']
})
export class CalcDigitalComponent implements OnInit {
  public resultado = "";

  constructor(public validacao: ValidacaoService) { }

  ngOnInit(): void {
  }

  public montarResultado(digito: string): void {
    if (this.validacao.ehValidaExpressao(digito, this.resultado)) {
      this.resultado += digito;
    }
  }

  limpar() {
    this.resultado = "";
  }

  public finalizar(): void {
    this.resultado = eval(this.resultado).toString();
  }

}
