import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import toastr from 'toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.authService.createUser(this.user)
      .then(res => {
        toastr.success('Your registration was finished successfully');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        toastr.error(err.message);
      });
  }
}
