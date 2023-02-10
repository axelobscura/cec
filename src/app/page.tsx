"use client";
import { useState } from 'react';
import { useAcervo } from 'lib/swr-hooks'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import Menu from './components/Menu'
import Loader from './components/Loader';
import Buscador from './components/Buscador';

export default function Home() {
  const { acervo, isLoading } = useAcervo();
  const [menuActivo, setMenuActivo] = useState('');

  if(isLoading){
    <Loader />
  }

  const menuHover = (e: any) => {
    if(e.target.viewportElement){
      const removeId = e.target.viewportElement.dataset.nombre;
      setMenuActivo(removeId);
    }
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
              alt="Picture of the author"
            />
          </Col>
          <Col className='wrapBuscador'>
            <Buscador />
          </Col>
        </Row>
        <Row className='contenido'>
          <Col sm={1} className='menu'>
            <Menu menuHover={(e: any) => menuHover(e)} />
          </Col>
          <Col sm={3} className='menu'>
            {menuActivo}
          </Col>
          <Col className='principal'>
            <h4>{menuActivo}</h4>
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
