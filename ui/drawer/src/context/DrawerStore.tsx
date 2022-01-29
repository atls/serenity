import { EventEmitter } from 'events'

export class DrawerStore extends EventEmitter {
  private drawers: Map<string, boolean> = new Map()

  open(id: string) {
    this.drawers.set(id, true)
    this.emit(id, true)
  }

  close(id: string) {
    this.drawers.set(id, false)
    this.emit(id, false)
  }
}
