import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../validacao.service';

@Component({
  selector: 'app-cal-hex',
  templateUrl: './cal-hex.component.html',
  styleUrls: ['./cal-hex.component.css']
})
export class CalHexComponent implements OnInit {
  public resultado = "";
  public operacao: string = "";

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
    let vetorBin = this.resultado.split("+");
    let soma: number = 0;
    vetorBin.forEach((element) => {
      soma += parseInt(element, 16);
      this.operacao += element + "+";
    });
    this.resultado = parseInt(soma.toString(), 10).toString(16);
    this.operacao =
      this.operacao.substring(0, this.operacao.length - 1) +
      "=" +
      this.resultado;
  }
}
