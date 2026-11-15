import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Busca } from '../../funcionalidades/busca/modelos';
@Injectable({providedIn:'root'})
export class ServicoBuscas {
 private readonly http=inject(HttpClient);
 iniciar(termo: string, modo: 'sincrona' | 'assincrona') { return this.http.post<Busca>(`/api/buscas/${modo}`, {termo}); }
 consultar(id: string) { return this.http.get<Busca>(`/api/buscas/${encodeURIComponent(id)}/resultados`); }
}
