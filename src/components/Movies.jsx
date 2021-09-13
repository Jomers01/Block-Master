import React, {useState} from 'react'
import { Span, DivIm } from '../styles/MoviesS'
import { Button, Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/modalStyles.css'
import axios from 'axios';

const Movies = ({peli}) => {

    const [abierto, setabierto] = useState(false)
    const [des, setdes] = useState([])
    const [trailer, setTrailer] = useState('')
    //API para las peliculas buscadas
    const url = "https://block-master-jomers.herokuapp.com/peliculas?title_like=";
    //Api para los trailers
    

    const mostrarTrailer = (tr)=>{
        const urlTrailers = `https://api.themoviedb.org/3/movie/${tr.id}/videos?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=us-US`
        fetch(urlTrailers)
        .then(resp => resp.json())
        .then(respp => {
            setTrailer(respp.results[0].key)
        })
    }

    const mostrarDetalle = async(e) =>{
        const res = await fetch(url)
        const data = await res.json()
        const xy = data.find(peli => peli.id === Number(e.target.id))
        setdes(xy)
        setabierto(!abierto)
        mostrarTrailer(xy)
    }
    
    const cerrarModal = () =>{
        setabierto(!abierto)
    }

    const borrarPeli = ()=>{
        axios.delete(`https://block-master-jomers.herokuapp.com/peliculas/${des.id}`)
            .then(()=> {
                alert("Borrado")
                window.location.assign("peliculas")
            })
            
    }

    return (
        <DivIm onClick={mostrarDetalle}>
            <Span style={(peli.vote_average >= 8)?({"border": "3px solid green", "borderLeftStyle": "none"}):(peli.vote_average > 5)?({"border": "3px solid yellow", "borderLeftStyle": "none"}):({"border": "3px solid red", "borderLeftStyle": "none"})}><img src="https://i.ibb.co/kK3Ljn2/estrella.png" alt="..." width="14px" />{peli.vote_average}</Span>
            <img src={"https://image.tmdb.org/t/p/w500/" + peli.poster_path} id={peli.id} alt="" width="250px" />


            <Modal isOpen={abierto} size="xl" contentClassName="hola">
                <ModalBody className="bodymodal">
                    <Button className="btnmodal" onClick={cerrarModal}>X</Button>
                    <div className="container-div">
                        <div className="poster">
                            <img src={"https://image.tmdb.org/t/p/w500/" + des.poster_path} alt="" height="450rem" />
                            <button className="editar" onClick={borrarPeli}>Borrar</button>
                        </div>
                        <div>
                            <h3 className="title-h3">{des.title}</h3>
                            <p className="p-overview">{des.overview}</p>
                            <iframe className="trailer" width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </DivIm>
    )
}

export default Movies
