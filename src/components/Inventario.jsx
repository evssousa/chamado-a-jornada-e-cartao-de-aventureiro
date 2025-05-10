import { useState } from 'react'

export default function Inventario() {
    const [itens, setItens] = useState(['Poção', 'Espada'])
    const [novoItem, setNovoItem] = useState('')

    function adicionarItem() {
        if (novoItem.trim() !== '') {
            setItens([...itens, novoItem])
            setNovoItem('')
        }
    }

    return (
        <div>
            <h2>Inventário</h2>
            <input 
                type="text" 
                placeholder="Novo item"
                value={novoItem}
                onChange={(e) => setNovoItem(e.target.value)} 
            />
            <button onClick={adicionarItem}>Adicionar ao inventário</button>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}