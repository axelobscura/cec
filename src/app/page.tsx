"use client";
import styles from './page.module.css'
import { useAcervo } from 'lib/swr-hooks'

export default function Home() {
  const { acervo, isLoading } = useAcervo();

  if(isLoading){
    <h1>Loading</h1>
  }

  console.log('acervo: ' + JSON.stringify(acervo));

  return (
    <main className={styles.main}>
      <div>
        <h1>Acervo Digital</h1>
        <p><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      </div>
    </main>
  )
}
