import { Pipe, PipeTransform } from '@angular/core';
import { ApiService } from '../../api-service/api.service';

@Pipe({
  name: 'totalFollowers'
})
export class TotalFollowersPipe implements PipeTransform {

  constructor(private api: ApiService) { }

  transform(value: string, ...args: unknown[]): number {
    let result = 0;
    this.api.getFollowers(value);
    this.api.followers$.subscribe({
      next: (list: any) => result = list && list.length ? list.length : 0,
      error: (err: Error) => console.error(err)
    })
    return result;
  }

}
