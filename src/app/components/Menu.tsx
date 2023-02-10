import { SiFirebase, SiBroadcom, SiCastro, SiCkeditor4, SiChainlink, SiCrystal, SiDiscogs } from "react-icons/si";
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
  const iconos = [
    <SiFirebase size='1.5rem' />, 
    <SiBroadcom size='1.5rem' />, 
    <SiCastro size='1.5rem' />, 
    <SiFirebase size='1.5rem' />,
    <SiChainlink size='1.5rem' />,
    <SiCkeditor4 size='1.5rem' />,
    <SiCrystal size='1.5rem' />,
    <SiDiscogs size='1.5rem' />
  ]
  return (
    <ListGroup variant="flush">
      {categorias.map((val: any) => {
        return(
          <ListGroup.Item as="div" action key={val.id} data-nombre={val.nombre} onClick={(e) => menuHover(e)} className="m-1">
            <>{iconos[val.id]}</>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
