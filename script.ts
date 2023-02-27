function somar(b: number): number {
  return b
}
console.log('somar', somar(10))

// DECLARANDO TIPOS

const produto: string = 'Livro'
const valor: number = 200

const objeto: {
  livro: string;
  valor: number
} = {
  livro: 'JS',
  valor: 100
}

const barato: boolean | string = valor < 400 ? true : 'Caro'

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase()
}
console.log(normalizarTexto('Silas   '))


// UNION TYPES
let total: string | number = 200
console.log(total = 'silas')

function isNumber(value: string | number) {
  if (typeof value === 'string') {
    return `${value} é string`
  } else {
    return `${value} é number`
  }
}
console.log(isNumber('100'))

const button = document.querySelector('button')
button?.click() // optional chaining // se existir o button vc aciona a function click() 

function toNumber(value: number | string) {
  if (typeof value === "number") {
    return console.log(value)
  } else if (typeof value === "string") {
    return console.log(value)
  } else {
    throw console.log("value dever ser um número ou uma string")
  }
}

toNumber('100')

// TYPES E INTERFACES
// PRIMEIRO EXEMPLO COMPLEXA
function preencherDados(dados: {
  nome: string,
  preco: number,
  teclado: boolean
}) {
  document.body.innerHTML += `
  <h2>Nome: ${dados.nome}</h2>
  <h3>Preço: ${dados.preco}</h3>
  <h6>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</h6>
  <hr>`
}

preencherDados({
  nome: 'Computador',
  preco: 100,
  teclado: true
})

preencherDados({
  nome: 'Televisão',
  preco: 900,
  teclado: false
})

// SEGUNDO EXEMPLO FRACIONADA 
type Produto = {
  nome: string,
  preco: number,
  teclado: boolean
}

interface Produtos {
  nome: string,
  preco: number,
  teclado: boolean
}

function newPreencherDados(dados: Produto | Produtos) {
  document.body.innerHTML += `
  <h2>Nome: ${dados.nome}</h2>
  <h3>Preço: ${dados.preco}</h3>
  <h6>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</h6>
  <hr>`
}

newPreencherDados({
  nome: 'New Televisão',
  preco: 900,
  teclado: false
})

type Categorias = 'design' | 'codigo' | 'descod'

function Teste(value: Categorias) {
  if (value === 'design') {
    console.log('esse é o Design')
  }
}
// OBS: interface quando for OBJETO

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json()
  console.log('data ', data)
  showProduct(data)
}
interface Products {
  nome: string,
  descricao: string,
  empresaFabricante: EmpresaFabricante,
  empresaMontadora: EmpresaMontadora,
  garantia: string,
  preco: number,
  seguroAcidentes: boolean
}

interface EmpresaFabricante {
  fundacao: number,
  nome: string,
  pais: string
}

interface EmpresaMontadora {
  fundacao: number,
  nome: string,
  pais: string
}

fetchProduct();
function showProduct(data: Products) {
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
  </div>`
}
//ARRAY []

const numeros = [10,2,3,4,5,6,7,8,20,40,100]
function compararNumeros(data: number[]){
  return data.filter((n) => n > 10)
}
function compararValores(data: Array<number>){
  return data.filter((n) => n > 10)
}

console.log('compararNumeros 1',compararNumeros([100,20]))
console.log('compararNumeros 2',compararNumeros(numeros))
console.log('compararValores 2',compararValores(numeros))

interface Estudos {
  aulas: number,
  gratuito: boolean,
  horas: number,
  idAulas: Array<number>,
  nivel: string,
  nome: string,
  tags: Array<string>
}

async function getFectch() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json()
  console.log('data getFectch', data)
  showGetFecth(data)
}

getFectch()
function showGetFecth(data: Estudos[]){  
    data.map((da: Estudos) => (
      document.body.innerHTML +=`
      <h4>NOME: ${da.nome}</h4>
      <h6>AULAS: ${da.aulas}</h6>
      <h5>TIPO: ${da.gratuito ? 'Gratuito' : 'Pago'}</h5>
      <h1 style="color:${da.nivel === 'iniciante' ? 'blue' : 'red'}">NIVEL: ${da.nivel === 'iniciante' ? 'Iniciante' : 'Avançado'}</h1>
      <p>TAGS: ${da.tags.join(", ")}</p>
      <p>AULAS: ${da.idAulas.join(" | ")}</p>
      `
    ))
}
interface Carros {
  roda?: number
}

const punto: Carros = {}

if(punto){
  punto?.roda?.toFixed()
}

const fiat500: Carros = {}
fiat500?.roda?.toLocaleString()

class Doces {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number){
    this.nome = nome;
    this.preco = preco
  }

  precoDoce() {
    return `R$ ${this.preco}`
  }
}

const acucar = new Doces('os doces é uma docura', 200)
console.log(acucar.precoDoce())


const link = document.getElementById('origamid')

if(link instanceof HTMLAnchorElement){
  link.href = link.href.replace('http://', 'htpps://')
}

const video = document.getElementById('videoprincipal')
if(video instanceof HTMLVideoElement) {
  console.log('volume do video: ',video.volume)
}

const links = document.querySelectorAll('.link')
console.log('links ', links)

function ativarElemento(elemento: HTMLElement){
  elemento.style.color = 'red'
  elemento.style.border = '1px solid red'
}

links.forEach((link) => {
 if(link instanceof HTMLElement){
  ativarElemento(link)
 }
})

const botao = document.querySelector('button')
console.log('botao ', botao)
function handleClick(event: PointerEvent){
  console.log('Event ', event)
}

function handleCLico(this: HTMLButtonElement, event: MouseEvent){
  console.log(this)
}
// ou
function handleClic(event: MouseEvent){
  if(event.currentTarget instanceof HTMLElement){
    console.log(event.currentTarget.innerText)
  }
}

botao?.addEventListener('pointerdown', handleClick)

botao?.addEventListener('click', handleCLico)
botao?.addEventListener('click', handleClic)

// GENERIC
// ele é um tipo generico, se mandar string ele identifica, se mandar number ele identifica
function geral<variavel>(a: variavel): variavel {
  return a;
}

console.log(geral<string>('retorna string'))
console.log(geral<number>(1200))
console.log(geral<boolean>(true))

///
const listNumbers = [1,2,3,4,5,6,7,8,9,10]
const fruts =['banana','maça','morango', 'uva', 'goiaba', 'limão']

function forceFive<TipoLista>(lista: TipoLista[]): TipoLista[]{
  return lista.slice(0,5)
}

console.log('forceFive numbers:', forceFive(listNumbers))
console.log('forceFive fruts:', forceFive(fruts))

function notNull<T>(arg: T){
  if(arg !== null) return arg;
  else return null
}

console.log('notNull', notNull('uma string')?.toLowerCase())
console.log('not Null',notNull(200)?.toFixed())
///////////////////////////////

function geraString(el: HTMLElement) {
  return el.innerHTML
}
const tagLink = document.querySelector('a')
console.log('tagLink ', tagLink)
if(tagLink){
  console.log('geralString', geraString(tagLink))
}
//OUTRA FORMA

function geraElement<Tipo extends HTMLElement>(elemento:Tipo){
return {
  texto: elemento.innerText,
  elemento
}
}
if(tagLink){
  console.log('geraElement', geraElement(tagLink).elemento.href)
}

function getLink<Tipo extends Element>(seletor: string): Tipo | null {
  return document.querySelector(seletor)
}

const resLink = getLink<HTMLAnchorElement>('a')?.href
console.log('RESLINK ', resLink)

// PODEMOS FAZER A TIPAGEM QUANDO PEGAR O LINK

const newLink = document.querySelector<HTMLAnchorElement>('a')
if(newLink instanceof HTMLAnchorElement){
  console.log('newLink: ', newLink?.href)
}

//////////////