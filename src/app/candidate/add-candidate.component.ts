import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
    templateUrl: './add-candidate.component.html',
    styles: [`
    .cand{
        position: absolute;
        width: 400px;
        height: 300px;
        z-index: 15;
        top: 30%;
        left: 50%;
        margin: -100px 0 0 -190px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        background-color: none;
    }
*{background-color: transparent;color: white} 
 select.custom-select{color: white; background-color:navy}
    button{background-color: purple; border: none; color: white}
    #but{width: 100px}
    `]
})

export class AddCandidateComponent{
    Department: any = ['Computer Science & Engineering', 'Microbiology', 'Law', 'Geography'];
    Level: any = ['Lecuturer I', 'Lecturer II', ' Senior Lecturer I', 'Senior Lecturer II', 'Reader'];
    Faculty: any = ['Faculty of Technology', 'Faculty of Agriculture', 'Faculty of Social Sciences', 'Faculty of Environmental Design Management', 'Faculty of Pharmacy'];
    
    constructor(private fb: FormBuilder, private router: Router){
        
    }

    AddCandidate = this.fb.group({
        surname: [],
        other: [],
        email: [],
        fac: [],
        dep: [],
        lev: []
    })

    onSubmit(){

    }

    changeFaculty(e) {
        this.AddCandidate.get('fac').setValue(e.target.value, {
         onlySelf: true
        })
       }
    changeDepartment(e) {
        this.AddCandidate.get('dep').setValue(e.target.value, {
         onlySelf: true
        })
       }
     changeLevel(e) {
        this.AddCandidate.get('lev').setValue(e.target.value, {
         onlySelf: true
        })
     }

      back(){
          window.alert('are you sure you want to cancel')
          this.router.navigate(['/dashboard'])
      }

}