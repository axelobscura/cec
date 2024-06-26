"use client";
import { useState, useEffect } from 'react';
import { useAcervo } from 'lib/swr-hooks'
import {Container, Row, Col} from 'react-bootstrap';
import Menu from './components/Menu';
import Loader from './components/Loader';
import Principal from './components/Principal';
import Auxiliar from './components/Auxiliar';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const {acervo, isLoading} = useAcervo();
  const [menuActivo, setMenuActivo] = useState('');
  const [icono, setIcono] = useState('');
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [terminoAuxiliarBusqueda, setAuxiliarTerminoBusqueda] = useState('');
  const [elAcervo, setElAcervo] = useState([]);

  if(isLoading){
    <Loader />
  }

  const menuHover = (e: any) => {
    if(e.target.viewportElement){
      const removeId = e.target.viewportElement.dataset.nombre;
      const icono = e.target.outerHTML;
      setMenuActivo(removeId);
      setIcono(icono);
    }
  }

  const termino = (e: any) => {
    setTerminoBusqueda(e.target.value);
  }

  const auxiliarActivo = (val: any) => {
    setAuxiliarTerminoBusqueda(val.target.innerText);
  }

  const inicio = () => {
    setTerminoBusqueda('test');
  }

  return (
    <>
      <Container fluid className='vh-100'>
        <Header inicio={inicio} termino={termino} />
        <Row className='contenido'>
          <Col sm={3} className='menu'>
            <Auxiliar menuActivo={menuActivo} auxiliarActivo={auxiliarActivo} />
          </Col>
          <Col className='principal'>
            <Principal menuActivo={menuActivo} terminoBusqueda={terminoBusqueda} terminoAuxiliarBusqueda={terminoAuxiliarBusqueda} isloading={isLoading} acervo={acervo} termino={termino} />
          </Col>
        </Row>
        <Footer/>
      </Container>
    </>
  )
}
