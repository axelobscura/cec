"use client";
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCategorias } from "lib/swr-hooks"
import Loader from "../components/Loader";

export default function Registro() {
  const [ enviado, setEnviado ] = useState('false');
  const { categorias, isLoading } = useCategorias();

  if(isLoading){
    return(
      <Loader />
    )
  }

  async function registro(e: any) {
    e.preventDefault();
    let categoria = e.target.categoria.value;
    let titulo = e.target.titulo.value;
    let autor = e.target.autor.value;
    let ano = e.target.ano.value;
    let mes = e.target.mes.value;
    let isbn = e.target.isbn.value;
    let editorial = e.target.editorial.value;
    let archivo = e.target.archivo.value;
    let presentacion = e.target.presentacion.value;
    let claves = e.target.claves.value;

    try {
      const res = await fetch('/api/create-registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            categoria,
            titulo,
            autor,
            ano,
            mes,
            isbn,
            editorial,
            archivo,
            presentacion,
            claves
        }),
      })
      setEnviado('true');
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
    } catch(e: any){
      throw Error(e.message)
    }
  };
  return (
    <>
      <Container fluid className='vh-100'>
        <Row>
          <Col></Col>
          <Col xs={12} md={6}>
            <h1 className='mt-3'>Registro del ACERVO IMCYC</h1>
            <hr/>
            {enviado === 'true' &&
              <div>
                <h2>Gracias!, el registro fue agregado con éxito</h2>
              </div>
            } 
            {enviado === 'false' && 
            <Form onSubmit={registro} className='mb-5'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Categoría:</Form.Label>
                <Form.Select name='categoria'>
                  <option value='8'>Libro</option>
                  <option value='3'>Investigación</option>
                  <option value='7'>Líderes de la construcción</option>
                  <option value='1'>Revista</option>
                  <option value='5'>Journal</option>
                  <option value='9'>Webinar</option>
                  <option value='4'>Eventos</option>
                  {categorias.map((catego: any) => (
                    <option key={catego.id} value={catego.id}>{catego.name}</option>
                  ))}
                  
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Título de la publicación:</Form.Label>
                <Form.Control type="text" name='titulo' placeholder="Ingresar el título en altas y bajas" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Autor(es):</Form.Label>
                <Form.Control type="text" name='autor' placeholder="Ingresar autores separados por comas" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ano:</Form.Label>
                <Form.Control type="number" name='ano' placeholder="Ingresar año de la publicación" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mes:</Form.Label>
                <Form.Select name='mes'>
                  <option value='Enero'>Enero</option>
                  <option value='Febrero'>Febrero</option>
                  <option value='Marzo'>Marzo</option>
                  <option value='Abril'>Abril</option>
                  <option value='Mayo'>Mayo</option>
                  <option value='Junio'>Junio</option>
                  <option value='Julio'>Julio</option>
                  <option value='Agosto'>Agosto</option>
                  <option value='Septiembre'>Septiembre</option>
                  <option value='Octubre'>Octubre</option>
                  <option value='Noviembre'>Noviembre</option>
                  <option value='Diciembre'>Diciembre</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ISBN:</Form.Label>
                <Form.Control type="text" name='isbn' placeholder="Registro de la publicación" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Editorial:</Form.Label>
                <Form.Control type="text" name='editorial' placeholder="Registro de la publicación" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre del archivo (EJ. principios_del_concreto.pdf):</Form.Label>
                <Form.Control type="text" name='archivo' placeholder="Registro del archivo sin espacios" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Presentación:</Form.Label>
                <Form.Control as="textarea" name='presentacion' rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Palabras clave (Separar con comas Ej. concreto, cemento):</Form.Label>
                <Form.Control type="text" name='claves' placeholder="Registro del archivo sin espacios" />
              </Form.Group>
              <Button variant="primary" type="submit">
                REGISTRAR ENTRADA
              </Button>
            </Form>
            }
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}
