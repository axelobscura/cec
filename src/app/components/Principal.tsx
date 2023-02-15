import { SiPlex } from "react-icons/si"
import {Container, Row, Col} from 'react-bootstrap'
import Loader from "./Loader";

type ContenidoProps = {
  menuActivo: any | unknown,
  terminoBusqueda: any |unknown,
  terminoAuxiliarBusqueda: any | unknown,
  isloading: any | unknown,
  acervo: any | unknown,
};

export default function Principal({menuActivo, terminoBusqueda, terminoAuxiliarBusqueda, isloading, acervo}: ContenidoProps){

  if(isloading){
    <Loader />
  }

  return (
    <div className='contenidoPrincipal'>
      {menuActivo &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {menuActivo.toUpperCase()}</h4>
        </>
      }
      {terminoBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoBusqueda.toUpperCase()}</h4>
        </>
      }
      {terminoAuxiliarBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoAuxiliarBusqueda.toUpperCase()}</h4>
        </>
      }
      <Container fluid>
        {acervo && acervo.map((ace: any) => (
          <Row key={ace.id}>
              <Col>
                <div className="tarjeta">
                  {ace.titulo.toUpperCase()}
                </div>
              </Col>
          </Row>
        ))}
      </Container>
    </div>
  )
}