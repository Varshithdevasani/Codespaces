import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit{
  fg!:FormGroup
  studentId:any

  constructor(private ss:StudentService,
    private fb:FormBuilder,private router:Router,private route:ActivatedRoute){

    this.fg=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      section:['',Validators.required]
    });
  }


  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id')!;
    this.ss.getStudent(this.studentId).subscribe(student => {
    this.fg.patchValue(student);
    });
  }
  updateStudent(){
    if(this.fg.valid){
    this.ss.updateStudent(this.fg.value,this.studentId).subscribe(()=>{
      this.router.navigate(['/']);
    });
    
  }
  else{
    this.fg.markAllAsTouched();
  }
}
}