
const baseURL = "http://localhost:3001"


export const getCharacters = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch(baseURL + "/characters")
      .then(response => response.json())
      .then(characters => dispatch({ type: "SHOW_CHARACTERS", characters }))
  }
}

export const getSingleCharacter = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch(baseURL + "/characters" + this.id )
    .then (respose => response.json())
    .then( character => dispatch({ type: "SHOW_CHARACTER", character }))
  }
}



