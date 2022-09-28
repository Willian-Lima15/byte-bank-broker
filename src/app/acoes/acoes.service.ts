import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators'
import { Acao, AcoesApi } from './modelo/model';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  constructor(
    private http: HttpClient
  ) { }

  getAcoes() {
    return this.http.get<AcoesApi>('http://localhost:3000/acoes').pipe(tap((valor)=> console.log(valor)),
      pluck("payloa"),
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
