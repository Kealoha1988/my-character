const initialState = {
  user: [],
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
      case "SET_USER":
        return{
          ...state,
          loading: false,
          user: action.payload
        }
        case "GET_USER":
          return{
            ...state,
            loading: false,
            user: action.payload
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

  