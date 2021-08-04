const initialState = {
  usersAndCharacters: [],
  user: {
    userName: "",
    id: "noUser",
    words: "what is your name?"
  },
  messages: [],
  message: "",
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

        case "GET_MESSAGES":
          return{
            ...state,
            loading: false,
            messages: action.payload
          }

        case "SET_MESSAGE":
          return{
          ...state,
          loading: false,
          message: action.payload
        }

    default:
    return state;
  }
}

export default attributeReducer

  