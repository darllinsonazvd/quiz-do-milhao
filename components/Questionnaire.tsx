import styles from '../styles/Questionnaire.module.css'
import QuestionModel from '../models/question'
import Question from './Question'
import Button from './Button'

interface QuestionnaireProps {
  question: QuestionModel
  lastQuestion: boolean
  questionAnswered: (question: QuestionModel) => void
  nextStep: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {
  function onResponse(index: number) {
    if (props.question.notAnswered) {
      props.questionAnswered(props.question.replyWith(index))
    }
  }

  return (
    <div className={styles.questionnaire}>
      {props.question ? (
        <Question
          value={props.question}
          onResponse={onResponse}
          timeIsOver={props.nextStep}
        />
      ) : (
        false
      )}
      <Button
        onClick={props.nextStep}
        text={props.lastQuestion ? 'Finalizar' : 'Próxima'}
      />
    </div>
  )
}
