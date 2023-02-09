"use client";
import styles from './page.module.css'
import { useAcervo } from 'lib/swr-hooks'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image';

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
          <Col>
            
            <h1>Acervo Digital</h1>
            
          </Col>
          <Col>
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
