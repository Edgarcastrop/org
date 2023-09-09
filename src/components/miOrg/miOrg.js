import "./miOrg.css";


const MiOrg = (props) => { 
    return <section className="myOrg_section">
        <h3 className="titulo">Mi organizacion</h3>
        <img src="/imgs/add.png" alt="add" onClick={props.cambiarModo} />
    </section>
}

export default MiOrg;