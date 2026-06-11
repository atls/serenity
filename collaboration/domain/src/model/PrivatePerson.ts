import { FormOfWork }  from './FormOfWork.js'
import { Interaction } from './Interaction.js'

export class PrivatePerson extends Interaction {
  formOfWork: FormOfWork = FormOfWork.person
}
