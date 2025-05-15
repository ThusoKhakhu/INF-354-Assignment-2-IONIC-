import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController, private router: Router) {}

  logout() {
    this.navCtrl.navigateBack('/login');
  }



  goToProgram(program: string) {
    if (program === 'program1') {
      this.router.navigate(['/weighloss']);  // Navigate to Program 1 page
    } else if (program === 'program2') {
      this.router.navigate(['/muscle-gain']);  // Navigate to Program 2 page
    }
  }


}