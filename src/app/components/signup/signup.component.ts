import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Services } from 'src/app/components/Auth/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formOptions!: any;
  formData!: any;
  constructor(private fb: FormBuilder, private ser: Services, private router: Router) { }

  ngOnInit(): void {
    
    this.formOptions = {
      "formname": "Signup",
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
          },
          {
            "name": "conpassword",
            "type": "password",
            "label": "Confirm Password",
            "rules": {
              "required": true,
            },
            "class":"col-sm-12"
          }
        ]
    }
   
  }
  getData(evt: any) {
    this.formData = evt;
  }
  onSignup() {
    if (this.formData.invalid) {
      // throw error
      Swal.fire('Error!!!', 'Enter required field value before register', 'error');
    }
    else {
      this.ser.addUsers(this.formData.value).subscribe({
        next: (res) => {
          console.log(res)
          this.formData.reset();
          Swal.fire('Success', 'You have been registered successfully', 'success');
          this.router.navigate(['login']);
        }
      })
    }
  }
}
