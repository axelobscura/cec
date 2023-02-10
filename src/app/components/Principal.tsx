import Image from 'next/image'

type ContenidoProps = {
  menuActivo: any | unknown
};

export default function Principal({menuActivo}: ContenidoProps){
  return (
    <>
      <h4>{menuActivo}</h4>
      <p>Contenido</p>
    </>
  )
}