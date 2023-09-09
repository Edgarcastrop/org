import "./Campo.css"

const Campo = (props) => {
    const obtenerDatos = (e) => {
        props.setValor(e.target.value);        
    }
    const {type = "text"} = props
    return <div className={`campo campo-${type}`}>
        <label>{props.titulos}</label>
        <input type={type} 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor} 
        onChange={obtenerDatos}
        />
    </div>
}
export default Campo