import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RepsotoryService } from 'src/app/Repository/repsotory.service';
import { User } from 'src/app/Repository/Repository';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  user!: User;
  // Define the properties that are used in the template
  email: string = '';
  password: string = '';

  constructor(private service: RepsotoryService,
              private navControl: NavController,
              private router: Router,
              private touster: ToastController,
              private authservice: AuthService

  ) { }

  ngOnInit() {
  }

  async signUp() {
    if (!this.email || !this.password) {
      const toast = await this.touster.create({
        message: 'Please enter both email and password.',
        duration: 2000,
        color: 'warning'
      });
      await toast.present();
      return;
    }
  
    // Get existing users
    const existingUsers = await this.authservice.getUsers();
  
    // Check if user already exists
    const userExists = existingUsers.some(user => user.username === this.email);
    if (userExists) {
      const toast = await this.touster.create({
        message: 'User already exists. Try logging in.',
        duration: 2000,
        color: 'danger',
        position: 'middle'
      });
      await toast.present();
      return;
    }
  
    // Create new user object
    const newUser: User = {
      id: Date.now(),
      username: this.email,
      password: this.password
    };
  
    // Add the user
    await this.authservice.addUser(newUser);
  
    // Show success toast
    const toast = await this.touster.create({
      message: 'Registration successful!',
      duration: 2000,
      color: 'success',
       position: 'middle'
    });
    await toast.present();
  
    // Optionally navigate to login or home page
    this.router.navigate(['/home']); // Make sure you have this route
  }
  

}
