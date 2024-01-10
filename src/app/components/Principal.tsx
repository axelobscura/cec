import { useState, useEffect } from "react"
import { SiPlex } from "react-icons/si"
import {Container, Row, Col} from 'react-bootstrap'
import Loader from "./Loader"
import Entrada from "./Entrada"
import { BiChevronRightCircle } from "react-icons/bi"

type ContenidoProps = {
  menuActivo: any | unknown,
  terminoBusqueda: string | unknown,
  terminoAuxiliarBusqueda: any | unknown,
  isloading: any | unknown,
  acervo: any | unknown,
};

export default function Principal({menuActivo, terminoBusqueda, terminoAuxiliarBusqueda, isloading, acervo}: ContenidoProps){

  const [acervoFiltro, setAcervoFiltro] = useState([]);

  if(isloading){
    <Loader />
  }

  useEffect(() => {
    // console.log('el acervo: '+acervo);
    setAcervoFiltro(acervo);
  });


  return (
    <div className='contenidoPrincipal'>
      {menuActivo &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {menuActivo.toUpperCase()}</h4>
        </>
      }
      {terminoBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoBusqueda?.toUpperCase()}</h4>
        </>
      }
      {terminoAuxiliarBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoAuxiliarBusqueda.toUpperCase()}</h4>
        </>
      }
      <Container fluid>
        {terminoBusqueda || terminoAuxiliarBusqueda ? 
          acervoFiltro && acervoFiltro.map((ace: any) => (
            <Row key={ace.id}>
                <Col>
                  <div className="tarjeta text-white">
                    <BiChevronRightCircle/> {ace.titulo.toUpperCase()}
                  </div>
                </Col>
            </Row>
          ))
        : 
          <Entrada/>
        }
      </Container>
    </div>
  )
}