import { SiFirebase, SiBroadcom, SiCastro, SiCkeditor4, SiChainlink, SiCrystal, SiDiscogs } from "react-icons/si";
import ListGroup from 'react-bootstrap/ListGroup'
import { useCategorias } from "lib/swr-hooks";

type MenuProps = {
  menuHover: any | unknown
};

const icons: any | unknown = [
  SiFirebase,
  SiBroadcom,
  SiCastro,
  SiCkeditor4,
  SiChainlink,
  SiCrystal,
  SiDiscogs
];

export default function Menu({menuHover}:MenuProps) {
  const { categorias, isLoading } = useCategorias();
  if(isLoading){
    return(
      <h1>CARGANDO</h1>
    )
  }
  
  return (
    <ul className="menuPrincipal">
      {categorias.map((val: any, idx: number) => {
        let Icon = icons[idx];
        return(
          <li key={val.id} data-nombre={val.nombre} className="m-1">
            <Icon data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='1.9rem'>{val.nombre}</Icon>
          </li>
        )
      })}
    </ul>
  )
}