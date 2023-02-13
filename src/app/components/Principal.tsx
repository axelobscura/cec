import { SiPlex } from "react-icons/si";

type ContenidoProps = {
  menuActivo: any | unknown,
  terminoBusqueda: any |unknown
};

export default function Principal({menuActivo, terminoBusqueda}: ContenidoProps){
  return (
    <div className='contenidoPrincipal'>
      {menuActivo &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {menuActivo}</h4>
        </>
      }
      {terminoBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoBusqueda}</h4>
        </>
      }
    </div>
  )
}