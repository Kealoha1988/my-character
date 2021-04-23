
const baseURL = "http://localhost:3001/"


// export const getUser = () => {
//   return (dispatch) => {
//     dispatch({ type: "LOADING" })
//         const dispatchObject = { type: "GET_USER", payload: user }
//         dispatch(dispatchObject)
//   }
// }


export const setUser = (userName) => {

  console.log(userName)

  return(dispatch) => {
  fetch(baseURL + "users", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userName),
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



