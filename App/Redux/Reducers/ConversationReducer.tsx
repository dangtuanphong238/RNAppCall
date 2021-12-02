import Immutable from 'seamless-immutable'

// Types
import { Conversation } from '@/Types/RootState'

// data
import messages from '@/MockData/conversation_message'
import { Message } from '@/Types/ConversationType'

export const INITIAL_STATE: Conversation = {
  messages: messages
}

const conversationReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default conversationReducer
