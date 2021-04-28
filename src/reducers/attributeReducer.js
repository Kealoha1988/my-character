const initialState = {
  usersAndCharacters: [],
  user: {
    userName: "",
    id: 100000,
    words: "what is your name?"
  },
  loading: true
}



const attributeReducer = (state=initialState, action) => {
  switch(action.type) {

      case "LOADING":
        return{
      ...state,
      loading: true
      }

      case "GET_CURRENT_USER":
        return{
          ...state,
          loading: false,
          user:{
            userName: action.payload.userName,
            id: action.payload.id,
            words: action.payload.words
          }
        }

      case "SET_USER":
        return{
          ...state,
          loading: false,
          user: {
            userName: action.payload.name,
            id: action.payload.id,
            words: "creator: " + action.payload.name
          }
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

  