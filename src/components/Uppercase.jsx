const UpperCase = (props) =>{
    const textoRecebido = props.recebido
    const textoTransformado = textoRecebido.toUpperCase()
    return(
      <h4>{textoTransformado}</h4>
    )
  }
  
  export {UpperCase};