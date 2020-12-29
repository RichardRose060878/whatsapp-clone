// user not logged in initially
export const initialState = {
  user: null,
}

// push the  user into the data layer
export const actionTypes = {
  SET_USER: 'SET_USER',
}

// When the SET_USER action is dispatched into the data // layer this listens for it. If the SET_USER action is // dispatched all state remains the same except for the // user which changes to that which is dispatched
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

//
export default reducer
