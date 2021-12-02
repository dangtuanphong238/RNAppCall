// types
import { Message } from './ConversationType'

export interface Conversation {
  messages: Array<Message>
}
export interface RootState {
  App: any
  Auth: any
  Conversation: Conversation
}
