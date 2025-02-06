import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  // studentid:any
  // student:any
  // constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute){}

  // ngOnInit(): void {
  //   this.studentid = this.route.snapshot.paramMap.get('id')!;
  //   this.studentService.getStudent(this.studentid).subscribe((student)=>{
  //     this.student=student;
  //   });
  // }

  // goBack(){
  //   this.router.navigate(['/']);
  // }



    student$!:Observable<any>
    id:any

    constructor(private ss:StudentService,private route:ActivatedRoute,private router:Router){}

    ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id')!;
      this.student$=this.ss.getStudent(this.id);
    }

    goBack(){
      this.router.navigate(['/'])
    }
}
