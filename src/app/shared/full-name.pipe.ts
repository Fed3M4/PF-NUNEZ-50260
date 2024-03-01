import { Pipe, PipeTransform } from '@angular/core';

export interface UserPipe {
  firstName: string;
  lastName: string
}

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: UserPipe, ...args: unknown[]): unknown {
    return value.firstName + ' ' + value.lastName;
  }

}
