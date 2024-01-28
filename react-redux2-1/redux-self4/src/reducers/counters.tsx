
interface Action {
  type: string,

}


const counter = (state=0, aciton:Action) => {
  switch (aciton.type) {
    case "+":
      return state + 1
    case "-":
      return state - 1
    default:
      return state
  }
}

export default counter
