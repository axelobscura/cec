import Image from 'next/image'
import { useAcervoCategoriasGenerales } from "lib/swr-hooks";
import Loader from './Loader';

interface Activo {
  menuActivo: string
}

export default function Auxiliar({ menuActivo }: Activo){
  const { acervoCategoriasGeneral, isLoading } = useAcervoCategoriasGenerales();
  if(isLoading){
    return(
      <Loader />
    )
  }
  console.log(acervoCategoriasGeneral);
  return (
    <div className='auxiliar'>
      {/*<h2>{menuActivo}</h2>*/}
      <ul className='menuauxiliar'>
      {acervoCategoriasGeneral.map((val: any) => {
        return(
          <li key={val.id}>{val.name}</li>
        )
      })}
      </ul>
    </div>
  )
}