import { SiPlex } from "react-icons/si";

type ContenidoProps = {
  menuActivo: any | unknown,
  terminoBusqueda: any |unknown,
  terminoAuxiliarBusqueda: any | unknown,
};

export default function Principal({menuActivo, terminoBusqueda, terminoAuxiliarBusqueda}: ContenidoProps){
  return (
    <div className='contenidoPrincipal'>
      {menuActivo &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {menuActivo.toUpperCase()}</h4>
        </>
      }
      {terminoBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoBusqueda.toUpperCase()}</h4>
        </>
      }
      {terminoAuxiliarBusqueda &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {terminoAuxiliarBusqueda.toUpperCase()}</h4>
        </>
      }
    </div>
  )
}