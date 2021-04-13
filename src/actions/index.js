
const baseURL = "http://localhost:3001"


export const setUser = () => {
  let strongParams = {
    user: {
        name: this.state.userName, 
    }
}
fetch("http://localhost:3001/users", {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(strongParams),
    method: "POST"
})
.then(response => response.json())
.then(user => this.setState({
  userName: user.name,
  id: user.id
}))
}






export const getUsersWithCharacters = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch(baseURL + "/users")
      .then(resp => resp.json())
      .then(usersAndCharaters => {
        const dispatchObj = { type: "GET_USERS_AND_CHARACTERS", payload: usersAndCharaters }
        dispatch(dispatchObj);
      })
  }
}



