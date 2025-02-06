import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

  //  export interface Student{
  //   id:number;
  //   name:string;
  //   section:string
  // }

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url='https://glowing-adventure-jj55x6669v492v7w-3000.app.github.dev/students';


  constructor(private http:HttpClient) { }

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  getStudent(id:number) : Observable<Student>{
    return this.http.get<Student>(`${this.url}/${id}`);
  }

  createStudent(student:Student) :Observable<Student>{
    return this.http.post<Student>(this.url,student);
  }

  updateStudent(student:Student,id:number) :Observable<Student>{
    return this.http.put<Student>(`${this.url}/${id}`,student);
  }

  deleteStudent(id:number) : Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}


