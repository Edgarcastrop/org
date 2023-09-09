import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";
import { v4 as uuidv4 } from "uuid";
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [color, actualizarColor] = useState("")
    const [titulo, nuevoTiulo] = useState("")

    const {registrarColaborador, crearequipo, like} = props

    const manejo = (evento) =>{
        evento.preventDefault()
        let id = uuidv4()
        const persona = {
            nombre,
            puesto,
            foto,
            equipo,
            id
        }
        registrarColaborador(persona);
    }
    const nuevoequipo = (e) =>{
        e.preventDefault()
        crearequipo({titulo, color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejo}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulos="Nombre" 
                placeholder="Ingtresa tu nombre" 
                required
                valor={nombre}
                setValor={actualizarNombre}
            />
            <Campo 
                titulos="Puesto"
                placeholder="Ingtresa tu puesto" 
                required
                valor={puesto}
                setValor={actualizarPuesto}
            />
            <Campo 
                titulos="Foto"
                placeholder="Ingresar enlace de foto " 
                required
                valor={foto}
                setValor={actualizarFoto}
            />
            <ListaOpciones
                value={equipo}
                setValor={actualizarEquipo}
                equipos={props.equipos} 
            />
            <Boton>
                Crear colaborador
            </Boton>
        </form>
        <form onSubmit={nuevoequipo}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulos="Equipo" 
                placeholder="Ingtresa el nombre del equipo" 
                required
                valor={titulo}
                setValor={nuevoTiulo}
            />
            <Campo 
                titulos="Color" 
                required
                valor={color}
                setValor={actualizarColor}
                type='color'
            />
            <Boton>
                Crear equipo
            </Boton>
        </form>
    </section>
}

export default Formulario;