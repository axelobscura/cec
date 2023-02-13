import Image from 'next/image'
import { useAcervoCategoriasGenerales } from "lib/swr-hooks";
import Loader from './Loader';

interface Activo {
  menuActivo: string,
  auxiliarActivo: any
}

export default function Auxiliar({ menuActivo, auxiliarActivo }: Activo){
  const { acervoCategoriasGeneral, isLoading } = useAcervoCategoriasGenerales();
  if(isLoading){
    return(
      <Loader />
    )
  }
  
  return (
    <div className='auxiliar'>
      {/*<h2>{menuActivo}</h2>*/}
      <ul className='menuauxiliar'>
      {acervoCategoriasGeneral.map((val: any) => {
        return(
          <li key={val.id} onClick={(val) => auxiliarActivo(val)}>{val.name}</li>
        )
      })}
      </ul>
    </div>
  )
}