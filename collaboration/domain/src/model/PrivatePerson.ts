import { FormOfWork }  from './FormOfWork'
import { Interaction } from './Interaction'

export class PrivatePerson extends Interaction {
  formOfWork: FormOfWork = FormOfWork.person
}
