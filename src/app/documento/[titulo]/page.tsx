"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/Footer';

export default function Documento() {
  const router = useRouter();
  const pathname = usePathname();

  console.log(router);
  return (
    <>
      <Container fluid className='vh-100'>
        <Row>
          <Col>
            {pathname}
          </Col>
          <Col xs={12} md={8}>
            contenido
          </Col>
        </Row>
        <Footer/>
      </Container>
    </>
  )
}
