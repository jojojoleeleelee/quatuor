export default ( state = [], action ) => {
  switch(action.type) {
    case "LOAD_ALL_QUARTETS":
      return action.quartets
    default:
      return state
  }
}
