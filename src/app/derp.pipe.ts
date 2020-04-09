import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'derp'
})
export class DerpPipe implements PipeTransform {

  transform(value): unknown {
    return Array.from(value);
  }

}
