const initialState = {
  usersAndCharacters: [],
  loading: true
}



const attributeReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOADING":
        return{
      ...state,
      loading: true
      }

      case "GET_USERS_AND_CHARACTERS":
        return{
              ...state,
              loading: false,
              usersAndCharacters: action.payload
            }

    default:
    return state;
  }
}

export default attributeReducer

  