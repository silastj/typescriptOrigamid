function somar(b: number): number{
  return  b
}
console.log('somar',somar(10))

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

function normalizarTexto(texto: string){
  return texto.trim().toLowerCase()
}
console.log(normalizarTexto('Silas   '))


// UNION TYPES
let total: string | number = 200
console.log(total = 'silas')

function isNumber(value: string | number){
  if(typeof value === 'string'){
    return `${value} é string`
  }else{
    return `${value} é number`
  }
}
console.log(isNumber('100'))

const button = document.querySelector('button')
button?.click() // optional chaining // se existir o button vc aciona a function click() 

function toNumber(value: number | string){
  if(typeof value === "number") {
    return console.log(value)
  }else if(typeof value === "string") {
    return console.log(value)
  }else {
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
}){
 document.body.innerHTML += `
  <h2>Nome: ${dados.nome}</h2>
  <h3>Preço: ${dados.preco}</h3>
  <h6>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</h6>
  <hr>`
}

preencherDados({
  nome:'Computador',
  preco: 100,
  teclado: true
})

preencherDados({
  nome:'Televisão',
  preco: 900,
  teclado: false
})

// SEGUNDO EXEMPLO FRACIONADA 
type Produto = {
  nome: string,
  preco: number,
  teclado: boolean
}

function newPreencherDados(dados:Produto) {
  document.body.innerHTML += `
  <h2>Nome: ${dados.nome}</h2>
  <h3>Preço: ${dados.preco}</h3>
  <h6>Possui teclado: ${dados.teclado ? 'sim' : 'não'}</h6>
  <hr>`
}

newPreencherDados({
  nome:'New Televisão',
  preco: 900,
  teclado: false
})

type Categorias = 'design' | 'codigo' | 'descod'

function Teste(value:Categorias){
  if(value === 'design'){
    console.log('esse é o Design')
  }
}