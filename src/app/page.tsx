import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        <ul>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Hats">Hats</Link>
          </li>
        </ul>
      </h1>
    </main>
  )
}
