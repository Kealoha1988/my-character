const initialState = {
  hair: {kind: '',
        color: ''},
  eye: {kind: '',
        color: ''},
  mouth: {kind: '',
        color: ''},
  shirt: {kind: '',
        color: ''},
  pants: {kind: '',
        color: ''},
  shoes: {kind: '',
        color: ''}
}


const attributeReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_ATTRIBUTE":
      console.log(state);
      console.log(action);
      return {
        ...state,
        character = {
          hair: {kind: '',
                color: ''},
          eye: {kind: '',
                color: ''},
          mouth: {kind: '',
                color: ''},
          shirt: {kind: '',
                color: ''},
          pants: {kind: '',
                color: ''},
          shoes: {kind: '',
                color: ''}
        }
      }
    default:
      return state;
  }
}

export default attributeReducer