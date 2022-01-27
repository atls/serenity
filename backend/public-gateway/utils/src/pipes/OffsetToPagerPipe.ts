import { Injectable }    from '@nestjs/common'
import { PipeTransform } from '@nestjs/common'

@Injectable()
export class OffsetToPagerPipe implements PipeTransform {
  constructor(private readonly take: number = 25) {}

  transform(offset: number) {
    return {
      take: this.take,
      offset,
    }
  }
}
