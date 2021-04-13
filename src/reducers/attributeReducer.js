const initialState = {
  user: {
    name: "",
    id: ""
  },
  chararcter: {
    name: "", 
    hairIndex: "",
    eyesIndex: "",
    mouthIndex: "",
    shirtIndex: "",
    pantsIndex: "",
    shoesIndex: "",j
  },
  loading: true
}



const attributeReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return{
      ...state,
      loading: true
      }
     
      }

    default:
    return state;
  }
}

export default attributeReducer

  