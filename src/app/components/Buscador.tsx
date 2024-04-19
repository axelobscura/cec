import Form from 'react-bootstrap/Form';

interface ElTermino {
  termino: any
}

export default function Buscador({ termino }: ElTermino){

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
          type="text" 
          name="termino" 
          placeholder="Buscar contenido" 
          onChange={(e) => termino(e)}
        />
      </Form.Group>
    </Form>
  )
}