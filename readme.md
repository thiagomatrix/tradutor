@Autor: Thiago Braga 2022

@Email: thiagomatrix@gmail.com

## Configure as Variáveis de Ambiente do Azure

* Configure a região conforme aplicação criada
* Informe a chave da api azure

AZURE_KEY=suachave

## Instale as dependências

<code>npm install</code>

## Configure os idiomas de saida da tradução

* index.js > langs

## Configure o arquivo de entrada da tradução (JSON)

* lang > import > pt_BR.json

### A saída dos arquivos será na pasta export e os arquivo conforme idiomas configurados

#### Ver os planos disponíveis em [AZURE](https://azure.microsoft.com/pt-br/pricing/details/cognitive-services/translator/)

## Para traduzir execute o seguinte comando

<code>npm run translate</code>