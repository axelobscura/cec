import { GiAbstract021, GiAbstract016 } from "react-icons/gi"
import ListGroup from 'react-bootstrap/ListGroup'
import { useCategorias } from "lib/swr-hooks";

type MenuProps = {
  menuHover: any | unknown
};

export default function Menu({menuHover}:MenuProps) {

  const { categorias, isLoading } = useCategorias();

  if(isLoading){
    return(
      <h1>CARGANDO</h1>
    )
  }

  return (
    <ListGroup variant="flush">
      {categorias.map((i: number, val: any) => {
        return(
          <ListGroup.Item key={i} data-nombre={val.nombre} onMouseEnter={(e) => menuHover(e)}>
            <GiAbstract021 size='2em' />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
