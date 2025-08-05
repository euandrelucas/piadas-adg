# 🤡 PiadasClient

Uma biblioteca simples para buscar piadas aleatórias via JavaScript/Node.js. Ideal para bots, projetos divertidos ou apenas para dar umas boas risadas no console.

## 🚀 Instalação

```bash
npm install piadas-lib
```

## 📦 Uso

Exemplo básico de como utilizar o `PiadasClient`:

```js
const piadasLib = require('piadas-lib');
const PiadasClient = new piadasLib();

async function contarPiada() {
  const piada = await PiadasClient.randomPiada();
  console.log(piada); // Exibe uma piada aleatória
}

contarPiada();
```

## 📘 API

* `randomPiada()` → `Promise<string>`
  Retorna uma piada aleatória como `string`.

## 💡 Exemplos de uso

* Bots de Discord
* Bots de Telegram
* CLIs engraçados
* Sites de humor

## 🤝 Contribuindo

Quer adicionar mais tipos de piadas ou melhorar a biblioteca? Fique à vontade para abrir um PR ou uma issue!

## 📄 Licença

MIT
