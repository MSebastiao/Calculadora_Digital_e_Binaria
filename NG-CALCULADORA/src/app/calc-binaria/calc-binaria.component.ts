import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from '../validacao.service'
import { DataService } from '../data.service';

@Component({
  selector: 'app-calc-binaria',
  templateUrl: './calc-binaria.component.html',
  styleUrls: ['./calc-binaria.component.css']
})
export class CalcBinariaComponent implements OnInit {

  constructor(private validacao: ValidacaoService, private data: DataService) {}

  public resultado: string = "";
  public operacao: string = "";

  ngOnInit(): void {
  }

  limpar() {
    this.resultado = "";
  }

  public montarResultado(digito: string): void {
    if (this.validacao.ehValidaExpressao(digito, this.resultado)) {
      this.resultado += digito;
    }
  }

  public finalizar(): void {
    let vetorBin = this.resultado.split("+");
    let soma: number = 0;
    vetorBin.forEach((element) => {
      soma += parseInt(element, 2);
      this.operacao += element + "+";
    });
    this.resultado = parseInt(soma.toString(), 10).toString(2);
    this.operacao =
      this.operacao.substring(0, this.operacao.length - 1) +
      "=" +
      this.resultado;
  }
}
