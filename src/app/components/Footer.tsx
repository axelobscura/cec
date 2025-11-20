import { Container, Row, Col } from 'react-bootstrap';
import Buscador from './Buscador';
import Image from 'next/image'

export default function Footer() {
  return (
    <Row className='footer'>
      <Col>
        <p className='text-gray-100'><small>® 1956 - 2025. Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      </Col>
    </Row>
  )
}