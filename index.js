require('dotenv').config()
const request = require('request');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const pt_BR = require('./lang/import/pt_BR.json');

const langs = [
  'en', 'ko', 'es', 'hu'
]

let chave_translator = process.env.AZURE_KEY;
let endpoint_translator = process.env.AZURE_API;
let region_translator = process.env.AZURE_REGION;

//==> Se não encontrar uma variável de ambiente' enviar mensagem de erro!
if (!chave_translator) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + chave_translator);
}

if (!endpoint_translator) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + endpoint_translator);
}

function traduzirTexto() {
  // ==> Aqui vamos configurar os requests
  let options = {
    method: 'POST',
    baseUrl: endpoint_translator,
    url: 'translate',
    qs: {
      'api-version': '3.0',
      'to': langs
    },
    headers: {
      'Ocp-Apim-Subscription-Key': chave_translator,
      'Ocp-Apim-Subscription-Region': region_translator,
      'Content-type': 'application/json',
      'X-ClientTraceId': uuidv4().toString()
    },
    body: [{
      'text': JSON.stringify(Object.values(pt_BR))
    }],
    json: true,
  }

  function translate(obj, json){

    langs.map((x, i)=>{
      let result = Object.values(obj[0].translations[i])
      result2 = result.pop()
      result = JSON.stringify(result).replace('[', '').replace(']', '').replace('"]', ']').replace('"[', '[').replaceAll('\\"', '"');
      result = JSON.parse(result);
      const keys = Object.keys(json);
      const text =  keys.reduce((obj, key, index) => ({ ...obj, [key]: result[index] }), {});
      fs.writeFile(`./lang/export/${x}.json`, JSON.stringify(text), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`file ${x} is updated`);
    })
  });
}

  request(options, (err, res, body) => {
    translate(body, pt_BR);
  })
};

traduzirTexto();
