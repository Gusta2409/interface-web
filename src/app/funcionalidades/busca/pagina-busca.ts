import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, timer, exhaustMap, takeWhile, timeout } from 'rxjs';
import { ServicoBuscas } from '../../nucleo/servicos/servico-buscas';
import { Busca } from './modelos';

@Component({selector:'app-pagina-busca', imports:[FormsModule, CurrencyPipe], templateUrl:'./pagina-busca.html'})
export class PaginaBusca {

 termo=''; readonly resultado=signal<Busca|null>(null); readonly carregando=signal(false); readonly erro=signal('');
 private readonly servico=inject(ServicoBuscas); private readonly router=inject(Router); private readonly destruir=inject(DestroyRef); private consulta?: Subscription;
 constructor() { inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(parametros=>{ const id=parametros.get('buscaId'); if(id) this.consultar(id); }); }

 buscar(modo:'sincrona'|'assincrona') {
  if(!this.termo.trim()) return; this.consulta?.unsubscribe(); this.erro.set(''); this.resultado.set(null); this.carregando.set(true);
  this.servico.iniciar(this.termo.trim(),modo).pipe(takeUntilDestroyed(this.destruir)).subscribe({next: resposta=>{ this.resultado.set(resposta); this.carregando.set(false); void this.router.navigate(['/resultados',resposta.buscaId]); },error:()=>{this.carregando.set(false);this.erro.set('Não foi possível iniciar a busca. Verifique a API e a infraestrutura.');}});
 }

 private consultar(id:string) {
  this.consulta?.unsubscribe(); this.erro.set('');
  this.consulta=timer(0,1500).pipe(exhaustMap(()=>this.servico.consultar(id).pipe(timeout(10000))),takeWhile(resposta=>resposta.status==='PROCESSANDO',true),takeUntilDestroyed(this.destruir)).subscribe({next:resposta=>this.resultado.set(resposta),error:()=>this.erro.set('Consulta interrompida. Verifique a API e recarregue para tentar novamente.')});
 }
}
