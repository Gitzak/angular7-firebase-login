import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import toastr from 'toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(res => {
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        toastr.error(err.message);
      });
  }

  loginWithEmailAndPassword() {
    this.authService.loginWithEmailAndPassword(this.user)
      .then(res => {
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        toastr.error(err.message);
      });
  }

}
