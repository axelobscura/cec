import Image from 'next/image'
import { useCategorias } from "lib/swr-hooks";
import Loader from './Loader';
import { BiPlusCircle } from 'react-icons/bi';

interface Activo {
  menuActivo: string,
  auxiliarActivo: any
}

export default function Auxiliar({ menuActivo, auxiliarActivo }: Activo) {
  const { categorias, isLoading } = useCategorias();

  if (isLoading || !categorias) {
    return (
      <Loader />
    )
  }

  return (
    <div className='auxiliar'>
      {/*<h2>{menuActivo}</h2>*/}
      <ul className='menuauxiliar'>
        {categorias.map((val: any) => {
          return (
            <li key={val.id} onClick={(val) => auxiliarActivo(val)} className='text-white'><BiPlusCircle /> {val.name}</li>
          )
        })}
      </ul>
    </div>
  )
}