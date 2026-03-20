import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email:string = "";
  password:string = "";
  errorMessage:string = "";

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  login(){

    const credentials = {
      email:this.email,
      password:this.password
    }

    this.authService.login(credentials).subscribe({

      next:(response)=>{

        this.authService.saveToken(response.token);

        this.router.navigate(['/dashboard']);

      },

      error:(err)=>{
        console.log(err);
        this.errorMessage = err.error["email"] || err.error["password"];
       
      }

    })

  }

}