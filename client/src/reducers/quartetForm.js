const initialState = {
  year: 0,
  image: '',
  title: '',
  uri: '',
  country: '',
}

export default ( state = initialState, action ) => {
  switch(action.type) {
    case "CREATE_QUARTET":
      return state.concat(action.quartet)
    case "REMOVE_QUARTET":
      return state.filter(quartet => quartet.id !== action.quartetId);
    case "UPDATED_QUARTET":
      return action.quartetForm
    default:
      return state
  }
}
