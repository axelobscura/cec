import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'

export default function Entrada(){
  return (
    <Container className='entrada'>
      <Row>
        <Col>
          <Image
            src="/logo.svg"
            width={250}
            height={50}
            alt="Picture of the author"
            style={{marginBottom: '20px'}}
          />
          <p className='mb-2'>Bienvenido al</p>
          <h1>ACERVO DEL CEMENTO Y DEL CONCRETO</h1>
          <h5>Instituto Mexicano del Cemento y del Concreto A.C.</h5>
        </Col>
      </Row>
    </Container>
  )
}