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
