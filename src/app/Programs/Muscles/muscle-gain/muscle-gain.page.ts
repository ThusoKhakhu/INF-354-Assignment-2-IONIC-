import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RepsotoryService } from 'src/app/Repository/repsotory.service';
import { Workouts } from 'src/app/Repository/Repository';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-muscle-gain',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './muscle-gain.page.html',
  styleUrls: ['./muscle-gain.page.scss'],
})
export class MuscleGainPage implements OnInit {


muscleGainProgram!: Workouts;
isComplete: boolean = false; //Flag to track completion

  constructor(private service: RepsotoryService,
              private navControl: NavController,
              private router: Router
  ) { }

  ngOnInit() {
    this.muscleGainProgram = this.service.getMuscleGainProgram();
    this.isComplete = this.muscleGainProgram.status === 'Complete';  // Check the stored status
  }



  
  goBackToHome(){
    this.navControl.navigateBack('/home')
  }


  markAsComplete() {
    this.service.markStatusAsComplete(this.muscleGainProgram);
    this.isComplete = true;
  }

viewProgress(){
   // Navigate to the progress page with the program's id
  this.router.navigate(['/progress', this.muscleGainProgram.id])
}



}
