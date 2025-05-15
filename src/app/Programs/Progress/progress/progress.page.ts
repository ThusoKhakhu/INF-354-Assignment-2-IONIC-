import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RepsotoryService } from 'src/app/Repository/repsotory.service';
import { Workouts } from 'src/app/Repository/Repository';
import { Location } from '@angular/common';



@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
weightLossProgram!: Workouts;  // To hold program data
isComplete: boolean = true;
programId: string = '';
isLoading: boolean = false;


  constructor(private route: ActivatedRoute,
              private service: RepsotoryService,
              private navControl: NavController,
              private location: Location
  ) { }



  ngOnInit() {
// Prevent focus issues during navigation
document.activeElement instanceof HTMLElement && document.activeElement.blur();
 // Get the program id from the route parameters
 this.route.paramMap.subscribe(params => {
  this.programId = params.get('id') || '';  // Get the id from the URL
 
});
this.fetchProgramDetails()

  }



 // Fetch program details from the repository
 fetchProgramDetails() {

  const id = +this.programId; // convert to number
  this.service.getProgramById(id).subscribe(program => {
    this.weightLossProgram = program;
  });
}


// Reset progress to allow starting over
resetProgress() {

if(!this.weightLossProgram) return;

this,this.isLoading = true; //Display spinner


const id = +this.programId; //Convert Id from dtring back to number

this.service.resetStatus(id); //Send id to the service and invoke the service function

//Update local variable
this.weightLossProgram.status = 'In Progress'
this.isComplete = false;

// Wait for 3 seconds before navigating back
setTimeout(() => {
  this.isLoading = false;
  this.location.back();
}, 3000);
}


 // Navigate back to the home page
 goBackToHome() {
  this.navControl.navigateBack('/home');
}



}
