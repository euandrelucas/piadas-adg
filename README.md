PiadasClient
=
Você pode criar um client usando:
 ```js
const piadasLib = require('jokes.adgdev')
const PiadasClient = new piadasLib();
const piada = await PiadasClient.randomPiada()
console.log(piada); // randomPiada() = Promise
```