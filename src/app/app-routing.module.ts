import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddCandidateComponent } from './candidate/add-candidate.component';
import { CandidateListComponent } from './candidate/candidate-list.component';
import { EditComponent } from './candidate/edit-candidate.component';





const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addCandidate', component: AddCandidateComponent},
  {path: 'candidate-list', component: CandidateListComponent},
  {path: 'edit-candidate/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
