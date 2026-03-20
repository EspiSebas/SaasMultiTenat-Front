import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
  name: string = "";
  nameCompany: string = "";
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register() {

    const data = {
      name: this.name,
      nameCompany: this.nameCompany,
      email: this.email,
      password: this.password
    }

    this.authService.register(data).subscribe({
      next: (response) => {
       
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error["name"] || err.error["password"] || err.error["email"];

      }
    })



  }
}
