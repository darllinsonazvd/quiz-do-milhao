import questions from '../questionsDatabase'

export default function questionsPerID(req, res) {
  const selectedId = +req.query.id
  const selectedQuestions = questions.filter(
    question => question.id === selectedId
  )

  if (selectedQuestions.length === 1) {
    const selectedQuestion = selectedQuestions[0].shuffleResponses()
    res.status(200).json(selectedQuestion.toObject())
  } else {
    res.status(204).send()
  }
}
