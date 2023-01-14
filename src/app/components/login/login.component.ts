import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from 'src/app/components/Auth/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formOptions: any

  data: any;
  constructor(private fb: FormBuilder, private ser: Services, private router: Router) { }

  ngOnInit(): void {
    
    this.formOptions = {
      "formname": "Login",
      "formFields":
        [
          {
            "name": "username",
            "type": "text",
            "label": "User Name",
            "rules": {
              "required": true,
            },
            "class":"col-sm-12"
          },
          {
            "name": "password",
            "type": "password",
            "label": "Password",
            "rules": {
              "required": true,
            },
            "class":"col-sm-12"
          }
        ]
    }
  }
  getData(evt: any) {
    this.data = evt;
  }
  onLogin() {
    if (this.data.invalid) {
      // throw error
      Swal.fire('Error!!!', 'Enter required field value before login', 'error');
    }
    else {
      // send to data base 
      this.ser.getUsers().subscribe({
        next: (res) => {

          const user = res.find((x: any) => {
            return x.username === this.data.value.username && x.password === this.data.value.password;
          });
          if (user) {
            localStorage.setItem('UserName', this.data.value.username)
            this.data.reset();
            this.router.navigate(['admin'])
          }
          else {
            Swal.fire('Error!!!', 'Please login with valid crerdentials', 'error');
          }
        },
        error: (err) => {
          Swal.fire('Error!!!', 'Error', 'error');
        }
      })
    }
  }


}
