import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/imgs/Footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/imgs/linkedin.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/imgs/github.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/imgs/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/imgs/Logo.png' alt='org' />
        <strong>Desarrollado por Edgar</strong>
    </footer>
}

export default Footer