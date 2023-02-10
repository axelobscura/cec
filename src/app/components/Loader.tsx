import Image from 'next/image'

export default function Loader(){
  return (
    <Image
      src="/loader.gif"
      width={50}
      height={50}
      alt="Picture of the author"
    />
  )
}