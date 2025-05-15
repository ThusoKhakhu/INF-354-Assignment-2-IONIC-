import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Workouts } from 'src/app/Repository/Repository';
import { RepsotoryService } from 'src/app/Repository/repsotory.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weighloss',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './weighloss.page.html',
  styleUrls: ['./weighloss.page.scss'],
})
export class WeighlossPage implements OnInit {

weightLossProgram!: Workouts;
isComplete: boolean = false; //Flag to track completion


  constructor(
    private workoutService: RepsotoryService,
    private navCtrl: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.weightLossProgram = this.workoutService.getWeightLossProgram();
    this.isComplete = this.weightLossProgram.status === 'Complete';  // Check the stored status

  }

  markAsComplete() {
    this.workoutService.markStatusAsComplete(this.weightLossProgram);
    this.isComplete = true;
  }

viewProgress(){
   // Navigate to the progress page with the program's id
  this.router.navigate(['/progress', this.weightLossProgram.id])
}

  goBackToHome() {
    this.navCtrl.navigateBack('/home');
  }

}
