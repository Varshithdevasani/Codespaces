import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{

  // students: Student[]=[];
  // id:any
  

  // constructor(private studentService:StudentService,private router:Router){}

  // ngOnInit(): void {
  //   this.studentService.getStudents().subscribe((data)=>{
  //     this.students=data;
  //   });
  // }

  //   deleteStudent(id:number){
  //     this.studentService.deleteStudent(id).subscribe(()=>{
  //       // this.students=this.students.filter((student) => student.id!==id);
  //       return this.ngOnInit();
  //     });
  //   }

  //     // updateStudent(id:number){
  //     //  this.router.navigate([`edit/${id}`]);
  //     // }
  
  //       viewStudent(id:number){
  //         this.router.navigate([`view/${id}`]);
  //       }





students$!:Observable<any>
sortedstudents$!:Observable<any>
filteredstudents$!:Observable<any>
id!:any
searchTerm:string=''

constructor(private ss:StudentService,private router:Router){}

ngOnInit(): void {
  this.getStudentsDetails();
  this.filteredstudents$=this.students$;
  // this.sortedstudents$=this.filteredstudents$;
  // this.sortedstudents();
  
}
  getStudentsDetails(){
    this.students$=this.ss.getStudents();
  }

  deleteStudent(id:number){
    this.ss.deleteStudent(id).subscribe(()=>{
      this.ngOnInit();
    });
   
      }

  viewStudent(id:number){
    this.router.navigate([`view/${id}`])
  }

  
//   searchMethod(event:any)
//   {
//  const searchTerm = event.target.value.trim();

//  if(!searchTerm) {
//   this.sortedstudents$ = this.filteredstudents$;
//  }
//     this.sortedstudents$ = this.filteredstudents$.pipe(map((vals)=>
//     {
//       return vals.filter((val: any)=>
//       {
//       //  return JSON.stringify(val).includes(searchTerm);
//       return val.id.toString().toLowerCase().includes(searchTerm) || val.name.toLowerCase().includes(searchTerm)
     
//       })
//     }));

 
 
 
  // }
//   sortedstudents()
// {
//   this.sortedstudents$ = this.students$.pipe(map((vals)=>
//   {
//     return vals.sort((a :any,b :any)=>a.name.localeCompare(b.name))
//   }))
// }
  
// sortbyDesc()
// {
//   this.sortedstudents$ = this.students$.pipe(map((vals)=>
  
//    vals.sort((a:any,b:any)=>b.name.localeCompare(a.name))
//   ))
// }
 
}