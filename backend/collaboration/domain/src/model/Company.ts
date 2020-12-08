import { FormOfWork }  from './FormOfWork'
import { Interaction } from './Interaction'

export class Company extends Interaction {
  formOfWork: FormOfWork = FormOfWork.company

  name: string

  numberOfEmployees: string

  constructor(name: string, numberOfEmployees: string) {
    super()

    this.name = name
    this.numberOfEmployees = numberOfEmployees
  }
}
