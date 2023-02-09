"use client";
import styles from './page.module.css'
import { useAcervo } from 'lib/swr-hooks'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Home() {
  const { acervo, isLoading } = useAcervo();
  if(isLoading){
    <h1>Loading</h1>
  }
  console.log('acervo: ' + JSON.stringify(acervo));
  return (
    <>
      <Container fluid className='vh-100'>
        <Row className='header'>
          <Col>
            <Image
              src="/logo.svg"
              width={150}
              height={45}
              alt="Picture of the author"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={1} className='menu'>
            <ListGroup variant="flush">
              <ListGroup.Item><FaBeer /></ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
            
          </Col>
          <Col sm={3} className='menu'>
            wef
          </Col>
          <Col>
            <h1>Acervo Digital</h1>
            <h3>Test</h3>
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
