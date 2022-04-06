export default class ResponseModel {
  #value: string
  #isRight: boolean
  #displayed: boolean

  constructor(value: string, isRight: boolean, displayed = false) {
    this.#value = value
    this.#isRight = isRight
    this.#displayed = displayed
  }

  static isRight(value: string) {
    return new ResponseModel(value, true)
  }

  static isWrong(value: string) {
    return new ResponseModel(value, false)
  }

  get value() {
    return this.#value
  }

  get isRight() {
    return this.#isRight
  }

  get displayed() {
    return this.#displayed
  }

  toDisplay() {
    return new ResponseModel(this.#value, this.#isRight, true)
  }

  static fromObject(model): ResponseModel {
    return new ResponseModel(model.value, model.isRight, model.displayed)
  }

  toObject() {
    return {
      value: this.#value,
      isRight: this.#isRight,
      displayed: this.#displayed
    }
  }
}
