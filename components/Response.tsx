import styles from '../styles/Response.module.css'
import ResponseModel from '../models/response'

interface ResponseProps {
  value: ResponseModel
  index: number
  option: string
  color: string
  onResponse: (index: number) => void
}

export default function Response(props: ResponseProps) {
  const response = props.value
  const responseDisplayed = response.displayed ? styles.responseDisplayed : ''

  return (
    <div
      className={styles.response}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={`${responseDisplayed} ${styles.content}`}>
        <div className={styles.front}>
          <div
            className={styles.option}
            style={{
              backgroundColor: props.color
            }}
          >
            {props.option}
          </div>
          <div className={styles.value}>{response.value}</div>
        </div>
        <div className={styles.back}>
          {response.isRight ? (
            <div className={styles.isRight}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{response.value}</div>
            </div>
          ) : (
            <div className={styles.isWrong}>
              <div>A resposta informada está errada...</div>
              <div className={styles.value}>{response.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
