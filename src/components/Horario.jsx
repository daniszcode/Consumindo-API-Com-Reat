import { useState } from "react"; //primeiro passo

const Horario = () => {
    let time = new Date().toLocaleTimeString()
    // segundo passo é usar usestate
    const [horario, setHorario] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        //terceiro passo é atualizar o valor (variavel horario ) com a função de atualização (sethorario)
        setHorario(time)
    }

    setInterval(updateTime, 1000) //mostrar na tela atualiação de 1 em 1 
    return <h1>{horario}</h1>
}

export { Horario };