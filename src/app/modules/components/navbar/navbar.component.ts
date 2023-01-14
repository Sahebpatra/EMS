import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../../../components/Auth/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Isloggedin: any=false;
  constructor(private service: Services, private router: Router) { }

  ngOnInit(): void {
    this.Isloggedin = !!this.service.isLoggedIn();
  }
  onLogout() {
    this.service.logout();
    this.router.navigate(['/login'])
    console.log( this.Isloggedin )
  }
}
