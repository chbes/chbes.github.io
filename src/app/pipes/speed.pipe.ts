import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pspeed'
})
export class SpeedPipe implements PipeTransform {

  ms = "ms"
  kmh = "kmh"
  mmin = "mmin"
  minkm = "minkm"

  transform(value: number, ...args: unknown[]): number {
    let type = this.ms;
    if (args.length > 0) {
      type = args[0] as string;
    }
    switch (type) {
      case this.ms:
        return value
      case this.kmh:
        return value * 3.6
      case this.mmin:
        return value * 60
      case this.minkm:
        return 9999;//TODO
      default:
        return value
    }
  }

}
