






import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string,length : number = 10): string {
    if(value.length > length){
      return value.substr(0,length) + '...';
    }
    return value;
  }

}
