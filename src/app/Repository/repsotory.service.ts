import { Injectable } from '@angular/core';
import { Workouts } from './Repository';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepsotoryService {

  private muscleGainPlan: Workouts= {
    id: 1,
    name: 'Muscle Gain',
    description: 'A high-intensity workout for burning fat.',
    exercises: ['Jump Rope', 'Burpees', 'Squats'],
    duration: '45 mins',
    equipment: ['Jump Rope'],
    status: localStorage.getItem('muscleGainStatus') || 'In Progress'
  }


private weightLossPlan: Workouts = {
  id: 2,
  name: 'Weight Loss',
  description: 'A fat-burning workout focused on cardio and endurance.',
  exercises: ['Jump Rope', 'Burpees', 'Mountain Climbers'],
  duration: '20 mins',
  equipment: ['Jump Rope', 'Mat'],
  status: localStorage.getItem('weightLossStatus') || 'In Progress'
}


constructor() {}

//get muscle gain data
getMuscleGainProgram(): Workouts{
  return this.muscleGainPlan;
}


//get weight loss gain data
getWeightLossProgram(){
  return this.weightLossPlan;
}

//Mark program as complete
markStatusAsComplete(program: Workouts){
  program.status = 'Complete';

  if(program.name === 'Muscle Gain'){
    localStorage.setItem('muscleGainStatus', 'Complete')
  } else if(program.name === 'Weight Loss'){
    localStorage.setItem('weightLossStatus', 'Complete')
  }

}

resetStatus(programId: number){

  if(programId === 1){
    this.weightLossPlan.status = 'In Progress';
    localStorage.setItem('muscleGainStatus', 'In Progress');
  }else if(programId === 2){
    this.weightLossPlan.status = 'In Progress'
    localStorage.setItem('weightLossStatus', 'In Progress');
  }
  
}

getProgramById(id: number): Observable<Workouts>{
let program: Workouts | null = null;
 // Fetch program based on the ID
 if (id === 1) {
  program = this.muscleGainPlan;
} else if (id === 2) {
  program = this.weightLossPlan;
}
// If no program found, return an empty object or fallback
return of(program || { id: 0, name: '', description: '', exercises: [], duration: '', equipment: [], status: 'In Progress' });

}


}
