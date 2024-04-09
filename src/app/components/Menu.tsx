import { SiFirebase, SiBroadcom, SiCastro, SiCkeditor4, SiChainlink, SiCrystal, SiDiscogs, SiAppveyor } from "react-icons/si";
import { useCategorias } from "lib/swr-hooks";
import Loader from "./Loader";

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
      <Loader />
    )
  }
  return (
    <ul className="menuPrincipal">
      {categorias.map((val: any, idx: number) => {
        let Icon = icons[idx];
        return(
          <li key={val.id} className="m-1">
            {
              val.id === 210 ? <SiFirebase data-nombre={val.name} className="text-white" onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 211 ? <SiBroadcom data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 212 ? <SiCastro data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 213 ? <SiCkeditor4 data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 214 ? <SiChainlink data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 215 ? <SiCrystal data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 216 ? <SiDiscogs data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              val.id === 217 ? <SiAppveyor data-nombre={val.nombre} onClick={(e:any) => menuHover(e)} size='30px' /> : 
              ''
            }
          </li>
        )
      })}
    </ul>
  )
}