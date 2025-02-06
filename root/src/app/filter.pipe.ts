import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students:any[],search:string): any {
    
    if(!search){
      return students;
    }
    const searchTerm=search.trim().toLowerCase();
    return students.filter((a)=>{
      return a.section.toLowerCase().includes(searchTerm);
    })
  }

}
