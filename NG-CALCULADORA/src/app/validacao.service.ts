import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ValidacaoService {
  constructor() {}

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

  public ehZero(caractere: string): boolean {
    if (caractere == "0") {
      return true;
    } else {
      return false;
    }
  }

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

  public operador(caractere: string): boolean {
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

  //verifica se o caractere passado é zero
  public zero(caractere: string): boolean {
    if (caractere == "0") {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o último caractere da expressão é um operador
  //e o caractere passado é zero
  public zeroOperador(caractere: string, expressao: string): boolean {
    if (
      this.operador(expressao.charAt(expressao.length - 1)) &&
      this.zero(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se o último caractere da expressão é um operador
  //e o caractere passado é operador
  public operadorOperador(caractere: string, expressao: string): boolean {
    if (
      this.operador(expressao.charAt(expressao.length - 1)) &&
      this.operador(caractere)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //verifica se a expressão é valida
  public validaExpressao(caractere: string, expressao: string): boolean {
    let valido: boolean = true;
    if (expressao.length == 0) {
      if (this.operador(caractere) || this.zero(caractere)) {
        valido = false;
      }
    } else {
      if (this.zeroOperador(caractere, expressao)) {
        valido = false;
      } else if (this.operadorOperador(caractere, expressao)) {
        valido = false;
      }
    }
    return valido;
  }
}
