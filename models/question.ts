import { shuffle } from '../functions/arrays'
import ResponseModel from './response'

export default class QuestionModel {
  #id: number
  #statement: string
  #responses: ResponseModel[]
  #correct: boolean

  constructor(
    id: number,
    statement: string,
    responses: ResponseModel[],
    correct = false
  ) {
    this.#id = id
    this.#statement = statement
    this.#responses = responses
    this.#correct = correct
  }

  get id() {
    return this.#id
  }

  get statement() {
    return this.#statement
  }

  get responses() {
    return this.#responses
  }

  get correct() {
    return this.#correct
  }

  get answered() {
    for (let response of this.#responses) {
      if (response.displayed) return true
    }
    return false
  }

  get notAnswered() {
    return !this.answered
  }

  replyWith(index: number): QuestionModel {
    const responseIsRight = this.#responses[index]?.isRight
    const responses = this.#responses.map((response, i) => {
      const selectedResponse = index === i
      const mustDisplay = selectedResponse || response.isRight
      return mustDisplay ? response.toDisplay() : response
    })

    return new QuestionModel(
      this.id,
      this.statement,
      responses,
      responseIsRight
    )
  }

  shuffleResponses(): QuestionModel {
    let shuffledResponses = shuffle(this.#responses)
    return new QuestionModel(
      this.#id,
      this.#statement,
      shuffledResponses,
      this.#correct
    )
  }

  static fromObject(model): QuestionModel {
    const responses = model.responses.map(resp =>
      ResponseModel.fromObject(resp)
    )
    return new QuestionModel(
      model.id,
      model.statement,
      responses,
      model.correct
    )
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answered: this.answered,
      correct: this.#correct,
      responses: this.#responses.map(resp => resp.toObject())
    }
  }
}
