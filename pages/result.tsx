import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Result.module.css'
import Stats from '../components/Stats'
import Button from '../components/Button'

export default function Result() {
  const router = useRouter()

  const total = +router.query.total
  const corrects = +router.query.corrects
  const percentage = Math.round((corrects / total) * 100)

  return (
    <div className={styles.result}>
      <Head>
        <title>Resultado</title>
        <meta
          name="description"
          content="Quiz de Milhões - Darllinson Azevedo | 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Resultado Final</h1>
      <div
        style={{
          display: 'flex'
        }}
      >
        <Stats text="Perguntas" value={total} />
        <Stats text="Corretas" value={corrects} bgColor="#9cd2a4" />
        <Stats text="Percentual" value={`${percentage}%`} bgColor="#de6a33" />
      </div>
      <Button href="/" text="Tentar novamente" />
    </div>
  )
}
