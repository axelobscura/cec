import { useState, useEffect } from "react"
import Link from "next/link"
import { SiPlex } from "react-icons/si"
import {Container, Row, Col} from 'react-bootstrap'
import Loader from "./Loader"
import Entrada from "./Entrada"
import { BiChevronRightCircle } from "react-icons/bi"

type ContenidoProps = {
  menuActivo: any | unknown,
  terminoBusqueda: string | undefined,
  terminoAuxiliarBusqueda: any | unknown,
  isloading: any | unknown,
  acervo: any | unknown,
  termino: any | unknown,
};

export default function Principal({menuActivo, terminoBusqueda, terminoAuxiliarBusqueda, isloading, acervo, termino}: ContenidoProps){

  const [acervoFiltro, setAcervoFiltro] = useState([]);

  if(isloading){
    <Loader />
  }

  let terminoBusquedaa: string | undefined = terminoBusqueda ? terminoBusqueda : '';

  useEffect(() => {
    //Si no hay una búsqueda en el campo de texto se muestra todo el acervo
    if (!terminoBusquedaa || terminoBusquedaa === '' || terminoBusquedaa == undefined){
      setAcervoFiltro(acervo)
    }else{
      //Se filtra por lo que está escrito en el input y se guarda en un arreglo llamado acervoFiltro
      var filtroAcervo = acervo.filter((item:any)=>{
        return item.titulo.toLowerCase().includes(terminoBusquedaa?.toLowerCase())
      });
      setAcervoFiltro(filtroAcervo)
    }
    //setAcervoFiltro(acervo);
  }, [terminoBusqueda, terminoBusquedaa]);

  return (
    <div className='contenidoPrincipal'>
      {menuActivo &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {menuActivo.toUpperCase()}</h4>
        </>
      }
      {terminoBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoBusquedaa.toUpperCase()}</h4>
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
                  <Link href={`https://s3.amazonaws.com/cec.imcyc.com/-Mathematische+Modelle+Zum+Prozess+des+Brennens+von+Zementklinker.pdf`} rel="noopener noreferrer" target="_blank">
                    <div className="tarjeta text-white">
                      <BiChevronRightCircle/> {ace.titulo.toUpperCase()}<br/>
                      <span>{ace.autor.toUpperCase()}</span>
                    </div>
                  </Link>
                </Col>
            </Row>
          ))
        : 
          <Entrada termino={termino}/>
        }
      </Container>
    </div>
  )
}