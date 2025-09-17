import './App.css'
//useffect
import { useState, useEffect } from 'react'
type ProdutoType = {
  id: number,
  nome: string,
  preco: number,
  urlfoto: string,
  descricao: string
}

function App() {
const [produtos, setProdutos] = useState<ProdutoType[]>([])
useEffect(() => {
  fetch('/api/produtos')
  .then((response) => response.json())
  .then((data) => setProdutos(data))
}, [])
return (
    <>
      <h1>Produtos</h1>
    {
      produtos.map((produto) => (
      <div key={produto.id}>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p>R$ {produto.preco}</p>
        <img src={produto.urlfoto} alt={produto.nome} width="200" />
      </div>
    ))
  }
  </>
  )
}

export default App
