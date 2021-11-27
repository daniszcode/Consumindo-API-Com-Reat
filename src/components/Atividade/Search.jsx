import { useState } from "react"
import { useEffect } from "react"

const Search = () => {
    const [user, setUser] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])
    
    useEffect(() => {
        fetch(`https://api.github.com/users/daniszcode/repos`).then(response => response.json()).then(items => setUser(items)
    
    )}, [])

    useEffect(() => {
        setFiltro(user.filter(repos => {
            return repos.name.includes(busca)
        }))
    }, [busca, user])

    return (
        
        <>
        <h1>Meus repos =)</h1>
        <input placeholder="Oi"
        onChange={e => setBusca(e.target.value)} />
        {filtro.map(repo => 
            <div key={repo.id}>
            <h2>{repo.name}</h2>
            </div>
            )}
        
        </>
        )
        
}
export {Search}