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
    shoesIndex: "",
    id: "",
    user_id: ""
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
      case "SET_USER":
        return{
         ...state,
         user: {
           name: this.state.name
           id: this.state.id
         },
         loading: false
        }
      case "MAKE_CHARACTER":
        return{
          ...state,
          user: {
            name: this.state.name,
            id: this.state.id
          },
          chararcter: {
            name: this.state.name, 
            hairIndex: this.state.hairIndex,
            eyesIndex: this.state.eyeIndex,
            mouthIndex: this.state.mouthIndex,
            shirtIndex: this.state.shirtIndex,
            pantsIndex: this.state.pantsIndex,
            shoesIndex: this.state.shoesIndex,
            id: this.state.id,
            user_id: this.state.user_id
          },
          loading: false
      }

    default:
    return state;
  }
}

export default attributeReducer

  