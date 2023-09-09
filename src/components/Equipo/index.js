import "./equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) =>{

    const {colorpimario, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    
 

    return <>{colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorpimario, 0.6) }}>
            <input
            type="color"
            value={colorpimario} 
            className="input-color"
            onChange={(e) =>{
                actualizarColor(e.target.value, id);
            }}
        />
            <h3 style={{ borderBottomColor: colorpimario}}>{titulo}</h3>
            <div className="colaboradores">
                {
                colaboradores.map((colaborador, index) => <Colaborador
                datos={colaborador}
                key={index}
                colorpimario={colorpimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
            </div>
        </section>
        }
        </> 
    
}

export default Equipo;