import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Questionnaire from '../components/Questionnaire'
import QuestionModel from '../models/question'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionsIDs, setQuestionsIDs] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctQuestions, setCorrectQuestions] = useState<number>(0)

  async function loadQuestionsIDs() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionsIDs = await resp.json()
    setQuestionsIDs(questionsIDs)
  }

  async function loadQuestion(questionID: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionID}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsIDs()
  }, [])

  useEffect(() => {
    questionsIDs.length > 0 && loadQuestion(questionsIDs[0])
  }, [questionsIDs])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const correct = questionAnswered.correct
    setCorrectQuestions(correctQuestions + (correct ? 1 : 0))
  }

  function getNextQuestionID() {
    const nextIndex = questionsIDs.indexOf(question.id) + 1
    return questionsIDs[nextIndex]
  }

  function nextStep() {
    const nextID = getNextQuestionID()
    nextID ? nextQuestion(nextID) : finish()
  }

  function nextQuestion(nextID: number) {
    loadQuestion(nextID)
  }

  function finish() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIDs.length,
        corrects: correctQuestions
      }
    })
  }

  return question ? (
    <div
      style={{
        padding: '2.5rem 2rem',
        height: '100%'
      }}
    >
      <Head>
        <title>Quiz de Milhões</title>
        <meta
          name="description"
          content="Quiz de Milhões - Darllinson Azevedo | 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Questionnaire
        question={question}
        lastQuestion={getNextQuestionID() === undefined}
        questionAnswered={questionAnswered}
        nextStep={nextStep}
      />
    </div>
  ) : (
    false
  )
}
