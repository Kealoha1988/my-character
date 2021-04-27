
const baseURL = "http://localhost:3001/"


export const setUser = userName => {
  const strongParams = {
    user: {
      name: userName,
    }
  }
  return dispatch => {
    fetch(baseURL + "users", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "POST"
    })
      .then(response => response.json())
      .then(user => {
        const dispatchObject = { type: "SET_USER", payload: user }
        dispatch(dispatchObject);
      })
  }
}



export const editUser = (userName, id ) => {
  const strongParams = {
    user: {
      name: userName,
    }
  }
  return dispatch => {
    fetch(baseURL + "users/" + id , {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "PATCH"
    })
      .then(response => response.json())
      .then(user => {
        const dispatchObject = { type: "SET_USER", payload: user }
        dispatch(dispatchObject);
      })
  }
}


export const getInitialState = () => {
  return dispatch => dispatch({type: "GET_USER"}) 
}



export const getUsersWithCharacters = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch(baseURL + 'users')
      .then(resp => resp.json())
      .then(usersAndCharaters => {
        const dispatchObject = { type: "GET_USERS_AND_CHARACTERS", payload: usersAndCharaters }
        dispatch(dispatchObject);
      })
  }
}



