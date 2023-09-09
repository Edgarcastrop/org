import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
    const actualizarEquipo = (e) =>{
        props.setValor(e.target.value)
    }
    return<div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.value} onChange={actualizarEquipo}>
            <option value="" disabled defaultValue="" hidden>Seleccionar aqui...</option>
        {props.equipos.map((equipo, i) => <option key={i} value={equipo}>{equipo}</option>  )}
        </select>
    </div>
}

export default ListaOpciones