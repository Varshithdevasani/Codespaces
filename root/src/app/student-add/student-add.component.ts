import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  studentForm:FormGroup;
  student:any
  dataStatus:boolean=false;

  constructor(private studentService:StudentService,
    private fb:FormBuilder, private router:Router ){
      this.studentForm=this.fb.group({
        name:['',[Validators.required,Validators.minLength(3)]],
        section:['',[Validators.required,Validators.maxLength(1)]]
      });   
      
  //     dateValid(a: AbstractControl): ValidationErrors | null{
  //       const pattern=/^\d{4}-\d{2}-\d{2}$/;
  //       if(!pattern.test(a.value)){
  //         return {dater: true};
  //       }
  //       return null;
  //     }

    //   numVal(a:AbstractControl): ValidationErrors | null{
  //     const pattern=/^[0-9]{10}$/;
  //     if(!pattern.test(a.value)){
  //       return {no:true};
  //     }
  //     return null;
    
  // }

  
  }

  addStudent(){
    if(this.studentForm.valid){
    this.studentService.createStudent(this.studentForm.value).subscribe(()=>{
      this.dataStatus=true    
    });
  }else{
    this.studentForm.markAllAsTouched();
  }
}

  goBack(){
this.router.navigate(['/']);
  }

}
