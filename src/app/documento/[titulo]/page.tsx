"use client";
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/Footer';

export default function Documento() {
  return (
    <>
      <Container fluid className='vh-100'>
        <Row>
          <Col></Col>
          <Col xs={12} md={6}>

            contenido
          </Col>

        </Row>
        <Footer/>
      </Container>
    </>
  )
}
