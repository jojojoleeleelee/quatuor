const getQuartets = quartets => {
  return {
    type: "LOAD_ALL_QUARTETS",
    quartets
  }
}

export const loadQuartets = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/quartets.json`)
    .then(res => res.json())
    .then(quartets => dispatch(getQuartets(quartets)))
  }
}

export function unloadQuartets() {
  return (dispatch) => {
    dispatch( { type: "LOAD_ALL_QUARTETS", payload: [] })
  }
}
