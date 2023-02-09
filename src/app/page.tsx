"use client";
import styles from './page.module.css'
import { useAcervo } from 'lib/swr-hooks'
import {Container, Row, Col} from 'react-bootstrap'

export default function Home() {
  const { acervo, isLoading } = useAcervo();
  if(isLoading){
    <h1>Loading</h1>
  }
  console.log('acervo: ' + JSON.stringify(acervo));
  return (
    <>
      <Container fluid className='vh-100'>
        <Row>
          <Col>
            <h1>Acervo Digital</h1>
            <p><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
          </Col>
          <Col>
            <h3>Test</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}
