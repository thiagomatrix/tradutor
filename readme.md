## Tradutor de arquivos Json com Microsoft Azure Translate

___

### Sobre

@Autor: Thiago Braga 2022

@Email: thiagomatrix@gmail.com

### 1) Configure as Variáveis de Ambiente do Azure

* Configure a região conforme aplicação criada
* Informe a chave da api azure

`AZURE_KEY=suachave`

### 2) Instale as dependências

`npm install`

### 3) Configure os idiomas de saida da tradução

* index.js > langs

### 4) Configure o arquivo de entrada da tradução (JSON)

* lang > import > pt_BR.json

### 5) A saída dos arquivos será na pasta lang/export e os arquivos terão nomes conforme idiomas configurados em lands

________

#### Ver os planos disponíveis em [AZURE](https://azure.microsoft.com/pt-br/pricing/details/cognitive-services/translator/)

___

### 6) Para traduzir execute o seguinte comando

`npm run translate`
