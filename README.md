# Interface de comparação de preços

Frontend Angular do TCC que compara buscas síncronas e assíncronas. Exibe ofertas, tempos da busca e, durante o processamento assíncrono, consulta o resultado periodicamente.

## Executar localmente

Use Node.js 24 e npm. Inicie a [API](https://github.com/Gusta2409/api-comparacao), que deve estar acessível na porta 8080, e depois execute:

```sh
npm ci
npm start
```

Abra `http://localhost:4200`. A configuração de desenvolvimento encaminha as rotas `/api/**` à API. Se a API usar outro endereço, ajuste `proxy.conf.json`. Para criar uma compilação estática, execute `npm run build`; ao hospedar a interface, configure o encaminhamento das rotas `/api/**` no seu servidor.

## Repositórios do TCC

- [api-comparacao](https://github.com/Gusta2409/api-comparacao): API e infraestrutura local.
- [servico-busca](https://github.com/Gusta2409/servico-busca): microsserviço das fontes simuladas.
- [interface-web](https://github.com/Gusta2409/interface-web): interface Angular.
