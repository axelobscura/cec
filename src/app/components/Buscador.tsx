import Form from 'react-bootstrap/Form';

export default function Buscador(){
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Buscar contenido" />
      </Form.Group>
    </Form>
  )
}