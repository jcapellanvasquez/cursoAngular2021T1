import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumirTexto'
})
export class ResumirTextoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value.toString().substr(0, 30) + "...";
  }

}
