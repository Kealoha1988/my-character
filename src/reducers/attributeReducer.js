const initialState = {
     characters: [],
     loading: true
    }


const attributeReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return{
      ...state,
      loading: true
      }
      case "SHOW_CHARACTERS":
      return{
        ...state,
        loading: false,
        characters: action.characters
      }

    default:
    return state;
  }
}

export default attributeReducer

  