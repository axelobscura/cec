"use client";
import { useState, useEffect } from 'react';
import { useAcervo } from 'lib/swr-hooks'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Menu from './components/Menu'
import Loader from './components/Loader';
import Buscador from './components/Buscador';
import Principal from './components/Principal';
import Auxiliar from './components/Auxiliar';

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
    setTerminoBusqueda('');
  }

  return (
    <>
      <Container fluid className='vh-100'>
        <Row className='header'>
          <Col sm={4}>
            <Image
              src="/logo.svg"
              width={150}
              height={45}
              alt="Acervo del cemento y del concreto - Instituto Mexicano del Cemento y del Concreto A.C."
              onClick={inicio}
            />
          </Col>
          <Col className='wrapBuscador'>
            <Buscador termino={(e: any) => termino(e)} />
          </Col>
        </Row>
        <Row className='contenido'>
          <Col xs={1} sm={1} className='menu'>
            <Menu menuHover={(e: any) => menuHover(e)} />
          </Col>
          <Col sm={3} className='menu'>
            <Auxiliar menuActivo={menuActivo} auxiliarActivo={auxiliarActivo} />
          </Col>
          <Col className='principal'>
            <Principal menuActivo={menuActivo} terminoBusqueda={terminoBusqueda} terminoAuxiliarBusqueda={terminoAuxiliarBusqueda} isloading={isLoading} acervo={acervo} />
          </Col>
        </Row>
        <Row className='footer'>
          <Col>
          <p><small>® 1956 - 2023. Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
