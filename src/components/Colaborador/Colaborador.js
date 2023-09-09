import "./colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborador = (props) => {

    const {nombre, foto, puesto, id, fav} = props.datos;
    const {colorpimario, eliminarColaborador, like} = props
    
    return <div className="colaborador">
        
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{backgroundColor: colorpimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h3>{nombre}</h3>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() =>like(id)} />}
            
            
        </div>
    </div>
}
export default Colaborador