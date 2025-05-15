import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ Mark as standalone
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule], // ✅ Import required modules
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toast: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    if (this.loginForm.valid) {
      // Prevent focus issues during navigation
    document.activeElement instanceof HTMLElement && document.activeElement.blur();

      const { email, password } = this.loginForm.value; //Getting form input values
      const success = await this.authService.login(email, password) // Pasrse to the login service method

      if (success) {
         // Show success toast if login is successful
      this.presentToast('Login successful!', 'success');
        this.navCtrl.navigateForward('/home'); //Redirect to home screen
      } else {
          // Show error toast if login fails
      this.presentToast('Invalid email or password. Please try again.', 'danger');
      }
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,  // Duration in milliseconds
      color: color,   // Color of the toast (success, danger, etc.)
      position: 'middle', // Position of the toast (top, bottom, middle)
    });

    toast.present(); // Show the toast
  }


}
