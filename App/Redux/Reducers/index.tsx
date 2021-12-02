import { combineReducers } from 'redux'
import AppReducer from './AppReducer'
import AuthReducer from './AuthReducer'
import ConversationReducer from './ConversationReducer'

export default combineReducers({
  App: AppReducer,
  Auth: AuthReducer,
  Conversation: ConversationReducer
})
