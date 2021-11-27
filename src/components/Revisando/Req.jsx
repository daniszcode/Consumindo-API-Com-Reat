import { useEffect } from "react";
import {useState} from "react";

const Requisicao = () => {
    const [elemento, setElemento] = useState([])
    const [mostrar, setMostrar] = useState(false)

    useEffect(() => {
        function pegaDados(){
            fetch(`https://ranekapi.origamid.dev/json/api/produto`).then(response => response.json()).then(item => setElemento(item)
            
            )}
            pegaDados()
        
        }, [elemento])

    
    return (
        <>
        <div>
        <p>olá</p>
        <button onClick={() => setMostrar(true)}>Cliqueeeeeeeeee</button>
        {mostrar && 
        elemento.map(item => { 
         return <ul key={item.id}><li>{item.nome}</li>
                </ul>}

    )}    
        </div>
        </>
    )
 }

export {Requisicao};