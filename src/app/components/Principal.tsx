import { SiPlex } from "react-icons/si";

type ContenidoProps = {
  menuActivo: any | unknown
};

export default function Principal({menuActivo}: ContenidoProps){
  return (
    <div className='contenidoPrincipal'>
      {menuActivo &&
        <>
          <h4><SiPlex style={{marginRight: '5px'}} /> {menuActivo}</h4>
          <p>Contenido</p>
        </>
      }
    </div>
  )
}