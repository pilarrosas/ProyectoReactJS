

const Saludo = (props) => {
    return (
        <div>
        <h2 className="Titulo">{props.titulo}</h2>
        <h3 className="SubTitulo">{props.subtitulo}</h3>
        </div>
    )
}

export default Saludo