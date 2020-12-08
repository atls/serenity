/* eslint-disable no-underscore-dangle */
import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ProjectId {
  @PrimaryGeneratedColumn()
  id: number

  build() {
    const length = String(this.id).length // eslint-disable-line

    const fill = Array.apply(0, Array(6 - length))
      .fill(0)
      .join('')

    return `P${fill}${this.id}`
  }
}
