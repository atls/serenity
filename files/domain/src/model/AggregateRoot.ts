export interface DomainEvent {
  $name?: string
  $version?: number
}

export interface AggregateRootProperties {
  id: string
  version: number
}

export abstract class AggregateRoot implements AggregateRootProperties {
  id: string

  version: number = 0

  private readonly domainEvents: DomainEvent[] = []

  private removed: boolean = false

  constructor(id: string) {
    this.id = id
  }

  protected when(event: DomainEvent): void {
    this.apply(event)
    this.version += 1
    this.domainEvents.push(event)
  }

  protected delete(event: DomainEvent): void {
    this.removed = true
    this.when(event)
  }

  pullDomainEvents(): DomainEvent[] {
    const events = [...this.domainEvents]

    this.domainEvents.length = 0

    return events
  }

  isDeleted(): boolean {
    return this.removed
  }

  private apply(event: DomainEvent): void {
    const handler = (this as any)[`when${event.constructor.name}`]

    if (typeof handler === 'function') {
      handler.call(this, event)
    }
  }
}
