import styles from '../styles/Question.module.css'
import QuestionModel from '../models/question'
import Statement from './Statement'
import Response from './Response'
import Countdown from './Countdown'

const DEFAULT_COUNTDOWN_TIME = 10 // seconds

const options = [
  { value: 'A', color: '#e6b84e' },
  { value: 'B', color: '#f266ba' },
  { value: 'C', color: '#62bfe3' },
  { value: 'D', color: '#a1de68' }
]

interface QuestionProps {
  value: QuestionModel
  timeToAnswer?: number
  onResponse: (index: number) => void
  timeIsOver: () => void
}

export default function Question(props: QuestionProps) {
  const question = props.value

  function renderResponses() {
    return question.responses.map((response, i) => {
      return (
        <div
          key={`${question.id}-${i}`}
          style={
            props.value.answered
              ? { cursor: 'not-allowed' }
              : { cursor: 'pointer' }
          }
        >
          <Response
            key={`${question.id}-${i}`}
            value={response}
            index={i}
            option={options[i].value}
            color={options[i].color}
            onResponse={props.onResponse}
          />
        </div>
      )
    })
  }

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Countdown
        key={question.id}
        duration={props.timeToAnswer ?? DEFAULT_COUNTDOWN_TIME}
        timeIsOver={props.timeIsOver}
      />
      {renderResponses()}
    </div>
  )
}
