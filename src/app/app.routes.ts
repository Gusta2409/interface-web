import { Routes } from '@angular/router';
import { PaginaBusca } from './funcionalidades/busca/pagina-busca';
export const routes: Routes = [{ path: '', component: PaginaBusca }, { path: 'resultados/:buscaId', component: PaginaBusca }, { path: '**', redirectTo: '' }];
