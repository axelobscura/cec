import {Container, Row, Col} from 'react-bootstrap';
import Buscador from './Buscador';
import Image from 'next/image'

export default function Header({inicio, termino} : {inicio: any, termino: any}){
  return (
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
  )
}