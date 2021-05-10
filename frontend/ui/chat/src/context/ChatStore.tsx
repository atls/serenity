import EventEmitter from 'events'

export class ChatStore extends EventEmitter {
  private chats: Map<string, any> = new Map()

  open(id: string) {
    this.chats.set(id, true)
    this.emit(id, true)
  }

  openChat(id: string, active: string) {
    this.chats.set(id, true)
    this.chats.set('active', active)
    this.emit(id, true, active)
  }

  close(id: string) {
    this.chats.set(id, false)
    this.emit(id, false)
  }
}
