import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAddComponent } from './student-add/student-add.component';

const routes: Routes = [
  {path:'',component:StudentListComponent},
  {path:'edit/:id',component:StudentEditComponent},
  {path:'add',component:StudentAddComponent},
  {path:'view/:id',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
