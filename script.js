"use strict";
function somar(b) {
    return b;
}
console.log('somar', somar(10));
// DECLARANDO TIPOS
const produto = 'Livro';
const valor = 200;
const objeto = {
    livro: 'JS',
    valor: 100
};
const barato = valor < 400 ? true : 'Caro';
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('Silas   '));
// UNION TYPES
let total = 200;
console.log(total = 'silas');
function isNumber(value) {
    if (typeof value === 'string') {
        return `${value} é string`;
    }
    else {
        return `${value} é number`;
    }
}
console.log(isNumber('100'));
const button = document.querySelector('button');
button?.click(); // optional chaining // se existir o button vc aciona a function click() 
function toNumber(value) {
    if (typeof value === "number") {
        return console.log(value);
    }
    else if (typeof value === "string") {
        return console.log(value);
    }
    else {
        throw console.log("value dever ser um número ou uma string");
    }
}
toNumber('100');
// TYPES E INTERFACES
// PRIMEIRO EXEMPLO COMPLEXA
function preencherDados(dados) {
    document.body.innerHTML += `
  <h2>Nome: ${dados.nome}</h2>
  <h3>Preço: ${dados.preco}</h3>
  <h6>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</h6>
  <hr>`;
}
preencherDados({
    nome: 'Computador',
    preco: 100,
    teclado: true
});
preencherDados({
    nome: 'Televisão',
    preco: 900,
    teclado: false
});
function newPreencherDados(dados) {
    document.body.innerHTML += `
  <h2>Nome: ${dados.nome}</h2>
  <h3>Preço: ${dados.preco}</h3>
  <h6>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</h6>
  <hr>`;
}
newPreencherDados({
    nome: 'New Televisão',
    preco: 900,
    teclado: false
});
function Teste(value) {
    if (value === 'design') {
        console.log('esse é o Design');
    }
}
// OBS: interface quando for OBJETO
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    console.log('data ', data);
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
  <div>
   <h1>Fetch</h1>
   <h2>Nome: ${data.nome}</h2>
   <h2>Garantia: ${data.garantia}</h2>
   <h2>Preço: ${data.preco}</h2>
   <h2>Seguro Acidentes: ${data.seguroAcidentes}</h2>
   <hr/>
   <p>Fabricante Fundação: ${data.empresaFabricante.fundacao} </p>
   <p>Fabricante Nome: ${data.empresaFabricante.nome} </p>
   <p>Fabricante Pais: ${data.empresaFabricante.pais} </p>
   <hr/>
   <p>Montadora Fundação: ${data.empresaMontadora.fundacao} </p>
   <p>Montadora Nome: ${data.empresaMontadora.nome} </p>
   <p>Montadora Pais: ${data.empresaMontadora.pais} </p>
   <hr/>
  </div>`;
}
//ARRAY []
const numeros = [10, 2, 3, 4, 5, 6, 7, 8, 20, 40, 100];
function compararNumeros(data) {
    return data.filter((n) => n > 10);
}
function compararValores(data) {
    return data.filter((n) => n > 10);
}
console.log('compararNumeros 1', compararNumeros([100, 20]));
console.log('compararNumeros 2', compararNumeros(numeros));
console.log('compararValores 2', compararValores(numeros));
async function getFectch() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log('data getFectch', data);
    showGetFecth(data);
}
getFectch();
function showGetFecth(data) {
    data.map((da) => (document.body.innerHTML += `
      <h4>NOME: ${da.nome}</h4>
      <h6>AULAS: ${da.aulas}</h6>
      <h5>TIPO: ${da.gratuito ? 'Gratuito' : 'Pago'}</h5>
      <h1 style="color:${da.nivel === 'iniciante' ? 'blue' : 'red'}">NIVEL: ${da.nivel === 'iniciante' ? 'Iniciante' : 'Avançado'}</h1>
      <p>TAGS: ${da.tags.join(", ")}</p>
      <p>AULAS: ${da.idAulas.join(" | ")}</p>
      `));
}
const punto = {};
if (punto) {
    punto?.roda?.toFixed();
}
const fiat500 = {};
fiat500?.roda?.toLocaleString();
class Doces {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoDoce() {
        return `R$ ${this.preco}`;
    }
}
const acucar = new Doces('os doces é uma docura', 200);
console.log(acucar.precoDoce());
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http://', 'htpps://');
}
const video = document.getElementById('videoprincipal');
if (video instanceof HTMLVideoElement) {
    console.log('volume do video: ', video.volume);
}
const links = document.querySelectorAll('.link');
console.log('links ', links);
function ativarElemento(elemento) {
    elemento.style.color = 'red';
    elemento.style.border = '1px solid red';
}
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
const botao = document.querySelector('button');
console.log('botao ', botao);
function handleClick(event) {
    console.log('Event ', event);
}
function handleCLico(event) {
    console.log(this);
}
// ou
function handleClic(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText);
    }
}
botao?.addEventListener('pointerdown', handleClick);
botao?.addEventListener('click', handleCLico);
botao?.addEventListener('click', handleClic);
// GENERIC
// ele é um tipo generico, se mandar string ele identifica, se mandar number ele identifica
function geral(a) {
    return a;
}
console.log(geral('retorna string'));
console.log(geral(1200));
console.log(geral(true));
///
const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruts = ['banana', 'maça', 'morango', 'uva', 'goiaba', 'limão'];
function forceFive(lista) {
    return lista.slice(0, 5);
}
console.log('forceFive numbers:', forceFive(listNumbers));
console.log('forceFive fruts:', forceFive(fruts));
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log('notNull', notNull('uma string')?.toLowerCase());
console.log('not Null', notNull(200)?.toFixed());
///////////////////////////////
function geraString(el) {
    return el.innerHTML;
}
const tagLink = document.querySelector('a');
console.log('tagLink ', tagLink);
if (tagLink) {
    console.log('geralString', geraString(tagLink));
}
//OUTRA FORMA
function geraElement(elemento) {
    return {
        texto: elemento.innerText,
        elemento
    };
}
if (tagLink) {
    console.log('geraElement', geraElement(tagLink).elemento.href);
}
function getLink(seletor) {
    return document.querySelector(seletor);
}
const resLink = getLink('a')?.href;
console.log('RESLINK ', resLink);
// PODEMOS FAZER A TIPAGEM QUANDO PEGAR O LINK
const newLink = document.querySelector('a');
if (newLink instanceof HTMLAnchorElement) {
    console.log('newLink: ', newLink?.href);
}
//////////////
//FUNCTION
// toda função que retorna undefined tem um retorno de void
// never ff
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('red');
function soma(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log('somar', somar(2));
function testeString(texto) {
    if (typeof texto === 'string') {
        return texto.trim().toLowerCase();
    }
    else {
        return texto.map((item) => item.trim().toLowerCase());
    }
}
console.log(testeString('Produto').toUpperCase());
function roundedUp(valor) {
    if (typeof valor === 'string') {
        return Math.ceil(Number(valor)).toString();
    }
    else {
        return Math.ceil(valor).toFixed(1);
    }
}
console.log('roundeUp', roundedUp('100')); // roundeUp 100
console.log('roundeUp', roundedUp(200)); // roundeUp 200.0
//Type Guard e Control Flow
// é a verificação de tipos string number ou stanceof 
const obj = {
    nome: 'Silas'
};
if ('nome' in obj) {
    console.log('tem sim o nome no Objeto.');
}
async function pegarProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    printProduct(data);
}
pegarProduto();
function printProduct(data) {
    if ('nome' in data) {
        console.log('tem mome dentro do Produto Notebook: ', data);
    }
}
//UNKNOWN
function tratarDados(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log('tratarDados', tratarDados('silas'));
console.log('tratarDados', tratarDados(200));
console.log('tratarDados', tratarDados(document.body));
// TYPEGUARD
// verificando se é um array
async function getCursos() {
    const response = await fetch('https://api.origamid.dev/json/curson.json');
    const data = await response.json();
    convertCursos(data);
}
getCursos();
function convertCursos(data) {
    if (data instanceof Array) {
        console.log('Isso é um Array');
    }
    if (Array.isArray(data)) {
        console.log('É um array');
    }
}
//TYPE ASSERTION
// temos os as e !
const videos = document.querySelector('video');
console.log('videos.volume', videos.volume);
const vide = document.querySelector('video');
const vides = document.querySelector('video');
const videss = document.querySelector('video');
const vide10 = document.querySelector('video');
vide10.volume;
console.log('vide ', vide);
//DESTRUCTURING
const { body } = document;
console.log('body ', body);
function compararPrecos(tipo, ...valores) {
    if (tipo === 'menor') {
        return Math.min(...valores);
    }
    if (tipo === 'maior') {
        return Math.max(...valores);
    }
}
console.log(`compararPrecos menor`, compararPrecos("menor", 100, 10, 20));
console.log(`compararPrecos maior`, compararPrecos("maior", 100, 10, 20));
console.log(`compararPrecos maior`, compararPrecos("maior", 1000, 1000000, 200000000));
function ProductCar(dados) {
    return `O carro do modelo ${dados.modelo},tem ${dados.portas} portas, com ${dados.rodas} rodas, e com preço R$${dados.preco}`;
}
console.log('ProductCar', ProductCar({ modelo: ' fiat 500', portas: 5, rodas: 4, preco: 100 }));
function TerceiroLocal(dados) {
    return `${dados.nome} ${dados.sobrenome} ${dados.preco}`;
}
