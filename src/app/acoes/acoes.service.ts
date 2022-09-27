import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Acao } from './modelo/model';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(
    private http: HttpClient
  ) { }

  getAcoes() {
    return this.http.get<any>('http://localhost:3000/acoes').pipe(
      map((acoes) => acoes.sort((acoesA, acoesB) => this.ordenaPorCodigo(acoesA, acoesB))));
  };

  private ordenaPorCodigo(acoesA: Acao, acoesB: Acao) {
    if (acoesA > acoesB) {
      return 1;
    }

    if (acoesA < acoesB) {
      return -1;
    }

    return 0
  }
}
