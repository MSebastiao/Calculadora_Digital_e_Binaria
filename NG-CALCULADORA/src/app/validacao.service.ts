import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ValidacaoService {
  constructor() {}

  // Verifica se um operador foi inserido
  public ehOperador(caractere: string): boolean {
    if (
      caractere == "+" ||
      caractere == "-" ||
      caractere == "/" ||
      caractere == "*"
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Verifica se o valor inserido é 0
  public ehZero(caractere: string): boolean {
    if (caractere == "0") {
      return true;
    } else {
      return false;
    }
  }

  // Verifica se o número zero veio após um operador
  public ehZeroDepoisDeOperador(caractere: string, expressao: string): boolean {
    if (
      this.ehOperador(expressao.charAt(expressao.length - 1)) &&
      this.ehZero(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Verifica se dois ou mais operadores foram digitados em sequencia
  public ehOperadorDepoisDeOperador(
    caractere: string,
    expressao: string
  ): boolean {
    if (
      this.ehOperador(expressao.charAt(expressao.length - 1)) &&
      this.ehOperador(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Verifica se a expressão digita é valida fazendo os testes anteriormente criados como operador após operador, zero após operador e etc
  public ehValidaExpressao(caractere: string, expressao: string): boolean {
    let valido: boolean = true;
    if (expressao.length == 0) {
      if (this.ehOperador(caractere) || this.ehZero(caractere)) {
        valido = false;
      }
    } else {
      if (this.ehZeroDepoisDeOperador(caractere, expressao)) {
        valido = false;
      } else if (this.ehOperadorDepoisDeOperador(caractere, expressao)) {
        valido = false;
      }
    }
    return valido;
  }
}
