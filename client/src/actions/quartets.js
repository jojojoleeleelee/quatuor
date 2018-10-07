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

export const loadQuartet = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3001/quartets/${id}.json`, {
      accept: 'application/json',
    }).then(res => res.json())
    .then(quartet => dispatch(getQuartets(quartet)))
  }
}

const getQuartet = quartet => {
  return {
    type: "LOAD_QUARTET",
    quartet
  }
}
