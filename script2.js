// ESSE COMENTARIO ABAIXO CONVERTE O ARQUIVO EM .TS
//@ts-check     
const body = document.body

body.style.background = '#fff'

// const button = document.querySelector('button')
// if(button) button.click()


const produtos = [
  {nome: 'Silas', 
   livro: 'JS'},{
    nome:'Amós',
    livro: 'TS'
   }
]

function filterBook(dado){
  return console.log('ts',dado.filter(item => item.livro === 'JS'))
}

filterBook(produtos)