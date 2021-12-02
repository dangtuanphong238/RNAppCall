import Immutable from 'seamless-immutable'

// Types

const INITIAL_STATE = Immutable({})

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default authReducer
