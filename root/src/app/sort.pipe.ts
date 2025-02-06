import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(students: any[]):any{
    
    if(!students){
      return students
    }

    return students.sort((a,b)=>{
      return a.name.localeCompare(b.name);
    })
  }

}
