import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import toastr from 'toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.userAuth().subscribe(auth => {
      this.loggedIn = auth;
    });
  }

  logOut() {
    this.authService.logOut()
    .then(res => {
      this.router.navigate(['/login']);
    })
    .catch(err => {
      toastr.error(err.message);
    });
  }

}
