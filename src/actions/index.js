
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

export const getMessages = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch(baseURL + 'messages')
      .then(resp => resp.json())
      .then(messages => {
        const dispatchObject = { type: "GET_MESSAGES", payload: messages }
        dispatch(dispatchObject);
      })
  }
}

export const setMessage = (messageContent) => {
  const strongParams = {
    message: {
      content: messageContent,
    }
  }
  return dispatch => {
    fetch(baseURL + "messages", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "POST"
    })
      .then(response => response.json())
      .then(message => {
        const dispatchObject = { type: "SET_MESSAGE", payload: message }
        dispatch(dispatchObject);
      })
  }
}


export const getUserState = () => {
  return (dispatch, getState) => {
    const dispatchObject = { type: "GET_CURRENT_USER", payload: getState().user }
    dispatch(dispatchObject)
  }
}



