import './App.css';
import { useState } from "react"
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/miOrg/miOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {
  

  const [modo, actualizarModo] = useState(true);
  const [colaboradores, actualizarColaborador] = useState([
    {
      id: uuidv4(),
      nombre: "Edgar Castro",
      foto: "https://github.com/edgarcastrop.png",
      puesto: "Instructor",
      equipo: "Front End",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ]);
  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuidv4(),
        titulo: "Programación",
        colorpimario: "#57C278" ,
        colorsecundario: "#D9F7E9"
      },
      {
        id: uuidv4(),
        titulo: "Front End",
        colorpimario: "#82CFFA",
        colorsecundario: "#E8F8FF"
      },
      {
        id: uuidv4(),
        titulo: "Data Science",
        colorpimario: "#A6D157",
        colorsecundario: "#F0F8E2"
      },
      {
        id: uuidv4(),
        titulo: "Devops",
        colorpimario: "#E06B69",
        colorsecundario: "#FDE7E8"
      },
      {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorpimario: "#DB6EBF",
        colorsecundario: "#FAE9F5"
      },
      {
        id: uuidv4(),
        titulo: "Móvil",
        colorpimario: "#FFBA05",
        colorsecundario: "#FFF5D9"
      },
      {
        id: uuidv4(),
        titulo: "Innovación y  Gestión",
        colorpimario: "#FF8A29",
        colorsecundario: "#FFEEDF"
      }                        
  ]
  )
  const cambiarModo = () =>{
    actualizarModo(!modo)
  }
  
  const registrarColaborador = (colaborador) =>{
    console.log(colaborador);
    actualizarColaborador([...colaboradores, colaborador]);
  }
  const eliminarColaborador = (id) =>{
    console.log("se elimino el colaborador", id);
    const colaboradorEliminado = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaborador(colaboradorEliminado);
  }
  const actualizarColor = (color, id) =>{
    const equipoActualizado = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorpimario = color;
        
      }    
      return equipo
    })
    actualizarEquipos(equipoActualizado)
  }
  const crearequipo = (newequipo)=>{
    console.log(newequipo);
    actualizarEquipos([...equipos, {...newequipo, id: uuidv4()}])
  }
  const like = (id) =>{
    const ponerLike = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaborador(ponerLike)
  }

  return (
    <div className="App">
      <Header />
      {modo && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearequipo = {crearequipo}
      />}
      
      <MiOrg cambiarModo={cambiarModo}/>

      {equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        /> 
        )
      }
      <Footer />
    </div>
  );
}

export default App;
