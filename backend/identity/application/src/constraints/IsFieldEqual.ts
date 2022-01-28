import { ValidationArguments }          from 'class-validator'
import { ValidationOptions }            from 'class-validator'
import { ValidatorConstraint }          from 'class-validator'
import { ValidatorConstraintInterface } from 'class-validator'
import { registerDecorator }            from 'class-validator'

@ValidatorConstraint({ async: false })
export class IsFieldEqualConstraint implements ValidatorConstraintInterface {
  async validate(value: string, args: ValidationArguments) {
    const [target] = args.constraints

    return value === args.object[target]
  }
}

export const IsFieldEqual = (target: string, validationOptions?: ValidationOptions) =>
  (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      options: validationOptions,
      constraints: [target],
      propertyName,
      validator: IsFieldEqualConstraint,
    })
  }
