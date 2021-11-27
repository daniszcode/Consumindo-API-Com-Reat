import { useState } from "react";

const Calculo = () => {

    const [valorInicial, setvarivel] = useState(0)
 function Diminuir() {
    setvarivel(valorInicial - 1)
     
    }  
    

    function Somar() {
        setvarivel(valorInicial + 1);
    
 }

        
    return (
        <>
        <h1>{valorInicial}</h1>
        <button onClick={Diminuir} > Clique aqui --</button>
        <button onClick={Somar} > Clique aqui ++</button>

        </>
    )
}

export {Calculo}





