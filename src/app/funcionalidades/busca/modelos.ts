export interface Resultado { fonte: string; nomeProduto: string; preco: number; tempoFonteMs: number; }
export interface Busca { buscaId: string; termo: string; modo: 'SINCRONO' | 'ASSINCRONO' | 'ASSINCRONO_SIMULADO'; status: 'PROCESSANDO' | 'CONCLUIDA' | 'FALHOU'; tempoRespostaInicialMs: number | null; tempoTotalMs: number | null; resultados: Resultado[]; }
