
const baseURL = "http://localhost:3001"


export const setUser = () => {
  let strongParams = {
    user: {
      name: this.state.userName
    }
  }
  return(dispatch) => {
  fetch("http://localhost:3001/users", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams),
    method: "POST"
  })
    .then(response => response.json())
    .then(user => 
      {const dispatchObject = { type: "SET_USER", payload: user }
    dispatch(dispatchObject);
    })}
}









export const getUsersWithCharacters = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(usersAndCharaters => {
        const dispatchObject = { type: "GET_USERS_AND_CHARACTERS", payload: usersAndCharaters }
        dispatch(dispatchObject);
      })
  }
}



