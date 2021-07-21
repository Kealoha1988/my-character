
const baseURL = "http://localhost:3001/"




// export const setUser = async (userName) => {
//   const strongParams = {
//     user: {
//       name: userName,
//     }
//   }
//   const headers = {headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(strongParams),
//   method: "POST"
//   }
//   const result = await function(dispatch){
//     fetch(baseURL + "users", {
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(strongParams),
//       method: "POST"
//     })
//       .then(response => response.json())
//       .then(user => {
//         const dispatchObject = { type: "SET_USER", payload: user }
//         dispatch(dispatchObject);
//       })
//   }

//   return result
// }


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


export const getUserState = () => {
  return (dispatch, getState) => {
    const dispatchObject = { type: "GET_CURRENT_USER", payload: getState().user }
    dispatch(dispatchObject)
  }
}



