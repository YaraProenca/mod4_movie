# Desenvolvimento de uma api do tipo CRUD em NodeJs utilizando a framework express.

## Descrição da aplicação:

A aplicação é um ambiente back-end com as informações dos filmes disponíveis em nossa rede de cinemas CineOne. Para isso foi utilizado o banco de dados relacional SQLite, foi utilizado o padrão do tipo CRUD e como organização conceitos de MVC.

<br>

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
Essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos localizados neste <a href = 'https://www.npmjs.com/'>site</a> em seu terminal.


## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo  na sequencia dos códigos acima caso seja a primeira execução, esteja na sequencia dos comandos acima e com o seu banco de dados já conectado seja ele local ou em nuvem.

```
npm run dev
```

## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da api:

No presente momento temos as seguintes rotas:

````
GET
POST
PATCH
DELETE
````
As mesmas podem ser encontradas neste <a href='https://github.com/YaraProenca/mod4_movie/blob/main/src/controller/movie.js'>arquivo </a>

<br>

### Exemplo de retorno da aplicação:


```
[
  {
    "id": 1,
    "filme": "HOMEM-ARANHA",
    "classificacao": "L - Livre para todos os públicos",
    "sinopse": "Peter Parker (Tobey Maguire) é um jovem estudioso que vive com seus tios, Ben (Cliff Robertson) e May (Rosemary Harris), desde que seus pais faleceram. Inteligente e com um grande interesse pela ciência, Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que aranha modificada geneticamente pique Peter. A partir de então seu corpo é quimicamente alterado pela picada da aranha, fazendo com que Peter possa escalar paredes e tetos, emitir pelos punhos um fluido ultra-resistente semelhante à uma teia de aranha e passe a ter um sentido de aranha, que o avisa sempre que há perigo por perto, além de superforça e visão ampliada. Inicialmente Peter pensa em usar seus novos poderes para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao permitir que um ladrão fuja por não considerar sua função capturá-lo, o fugitivo acaba assassinando seu tio Ben. A partir de então, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio enfrentar o psicótico Duende Verde (Willem Dafoe), que na verdade é o empresário Norman Osborn após ter sido exposto à um gás experimental que lhe deu uma segunda personalidade e grande força física.",
    "genero": "Ação Aventura Ficção Científica Super-herói"
  }
]
```
<br>

## Hospedagem API:

Você também poderá encontrar esta API na seguinte hospedagem: <a href= 'https://mod4-api.herokuapp.com/ '> Heroku </a>




