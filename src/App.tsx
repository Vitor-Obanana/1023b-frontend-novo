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
const [produto, setProduto] = useState<ProdutoType | null>(null)
useEffect(() => {
  fetch('/api/produtos')
  .then((response) => response.json())
  .then((data) => setProdutos(data))
}, [])
function handleForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const form = event.currentTarget
  const formData = new FormData(form)
  const nome = formData.get('nome') as string
  const preco = Number(formData.get('preco'))
  const urlfoto = formData.get('urlfoto') as string
  const descricao = formData.get('descricao') as string
  fetch('/api/produtos'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }}}
return (
    <>
      <h1>Cadastro de produtos</h1>
      <form onSubmit={handleForm}>
        <input type="text" name="nome" placeholder="Nome" />
        <input type="number" name="preco" placeholder="Preço" />
        <input type="text" name="urlfoto" placeholder="URL da foto" />
        <input type="text" name="descricao" placeholder="Descrição" />
        <button type="submit">Adicionar produto</button>
      </form>
      <h1>Lista de produtos</h1>
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
