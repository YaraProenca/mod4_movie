# Desenvolvimento de uma api do tipo CRUD em NodeJs utilizando a framework express.

## Descrição da aplicação:

<br>

### Exemplo de retorno da aplicação:


```

## Ferramentas utilizadas:
Para o desenvolvimento como já mencionado foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, hospedado pela ferramenta de cloud Heroku.

## Dependencias necessárias:
```  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "fs": "^0.0.1-security",
    "https": "^1.0.0",
    "nodemon": "^2.0.15",
    "sqlite": "^4.0.23",
    "sqlite3": "^5.0.2"
  },
```
As dependencias podem ser encontradas <a href = 'https://github.com/YaraProenca/mod4_movie/blob/main/package.json'>neste arquivo</a> do qual o trecho acima foi extraído para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v" o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/YaraProenca/mod4_movie.git && npm install
```
## Dependencias de desenvolvimento:
```js
"devDependencies": {
    "dotenv": "^10.0.0"
  }
```
Em outra parte do <a href = '#'>arquivo</a> de configuração é possível encontrar o código acima que foi extraído do mesmo, essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev dotenv
```
## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo  na sequencia dos códigos acima caso seja a primeira execução, esteja na sequencia dos comandos acima e com o seu banco de dados já conectado seja ele local ou em nuvem.

```
npm start
```

## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da api:

No presente momento temos apenas a rota <b>"/"</b> onde podemos fazer o método GET passando como parametros da url querys ilimitadas contendo o endereço, aconselha-se tratar os endereços com o método <i>encodeURIComponent()</i> antes de colocalos na url de solicitação. abaixo segue a url da api no ar:
<br>
https://mod4-api.herokuapp.com/
<br>

## Exemplo de URL:
<br>

```
```
