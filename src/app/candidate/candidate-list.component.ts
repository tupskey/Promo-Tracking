import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';

@Component({
    templateUrl: './candidate-list.component.html',
    styles: [`
        h4{text-align: center; margin-top: 20px;}
        td{font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;}
    `]
})

export class CandidateListComponent implements OnInit{
    Candidates:any = [];
    constructor(private router: Router, private portalService : PortalService){

    }
    
    ngOnInit(){
        this.portalService.getCandidates().subscribe((data)=> {
            this.Candidates = data;
        })  
    }

    editCandidate(){
        
    }

    removeCandidate(candidate, i){
        if(window.confirm('Are you sure you want to delete this Candidate?')){
            this.portalService.deleteCandidate(candidate._id).subscribe((data) => {
                this.Candidates.splice(i, 1); 
            })
        } 
    }

}