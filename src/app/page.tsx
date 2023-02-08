import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Acervo Digital</h1>
        <p><small>Instituto Mexicano del Cemento y del Concreto A.C.</small></p>
      </div>
    </main>
  )
}
