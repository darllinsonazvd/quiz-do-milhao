export function shuffle(elements: any[]): any[] {
  return elements
    .map(value => ({ value, randomValue: Math.random() }))
    .sort((object1, object2) => object1.randomValue - object2.randomValue)
    .map(object => object.value)
}
