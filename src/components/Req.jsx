
import { useState } from "react"
import { useEffect } from "react"

const CardReq = () => {
    const [personagens, setPersonagens] = useState([])
    const [busca, setBusca] = useState('')
    const [filtro, setFiltro] = useState([])
    
    useEffect(() => {
        fetch(`http://hp-api.herokuapp.com/api/characters`).then(response => response.json()).then(items => setPersonagens(items)
    
    )}, [])

    useEffect(() => {
        setFiltro(personagens.filter(personagem => {
            return personagem.name.includes(busca) + personagem.image.includes(busca)
        }))
    }, [busca, personagens  ])

    return (
        
        <>
        <input placeholder="Oi"
        onChange={e => setBusca(e.target.value)} />
        {filtro.map(persona => 
            <div key={persona.dateOfBirth}>
            <h2>{persona.name}</h2>
            <img src={persona.image} alt={persona.name} />
            </div>
            )}
        
        </>
        )
        
}
export {CardReq}

// const CardReq = () => {
//     const [personagens, setPersonagens] = useState([])
    
//     useEffect(() => {
//         fetch(`https://rickandmortyapi.com/api/character`).then(response => response.json()).then(item => setPersonagens(item.results)
    
//     )}, [])

//     return (
//         <>
//         {personagens.map(persona => 
//             <div key={persona.id}>
//             <h2>{persona.name}</h2>
//             <img src={persona.image} alt={persona.nome} />
//             </div>
//             )}
        
//         </>
//         )
        
// }
// export {CardReq}