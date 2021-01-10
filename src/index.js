const { get } = require('axios');

class PiadasClient {
    constructor() {
        this.piadasLink = 'https://us-central1-kivson.cloudfunctions.net/charada-aleatoria'
    }
   async randomPiada() {
    const goRequest = await get(this.piadasLink);
    const data = goRequest.data;
            return {
                question: data.pergunta,
                answer: data.resposta
            };
    }
};

module.exports = PiadasClient;