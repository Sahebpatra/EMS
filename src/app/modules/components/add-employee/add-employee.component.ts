import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Services } from 'src/app/components/Auth/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formOptions:any;
  formData:any
  constructor(private fb: FormBuilder, private ser: Services) { }

  ngOnInit(): void {
    
    this.formOptions = {
      "formname": "Add Employee",
      "formFields":
        [
          {
            "name": "name",
            "type": "text",
            "label": "Employee Name",
            "rules": {
              "required": true,
            },
            "class":"col-sm-6"
          },
          {
            "name": "department",
            "type": "select",
            "label": "Department",
            "options": [
                    {
                      "key": "HR",
                      "value": "HR"
                    },
                    {
                      "key": "Engineer",
                      "value": "Engineer"
                    }
                  ],
            "rules": {
              "required": true,
            },
            "class":"col-sm-6"
          },
          {
            "name": "country",
            "type": "select",
            "label": "Country",
            "options": [
                    {
                      "key": "India",
                      "value": "India"
                    },
                    {
                      "key": "UK",
                      "value": "UK"
                    },
                    {
                      "key": "USA",
                      "value": "USA"
                    }
                  ],
            "rules": {
              "required": true,
            },
            "class":"col-sm-4"
          },
          {
            "name": "state",
            "type": "select",
            "label": "State",
            "options": [
                    {
                      "key": "WB",
                      "value": "WB"
                    },
                    {
                      "key": "Delhi",
                      "value": "Delhi"
                    }
                  ],
            "rules": {
              "required": true,
            },
            "class":"col-sm-4"
          },
          
          {
            "name": "city",
            "type": "text",
            "label": "City",
            "rules": {
              "required": false,
            },
            "class":"col-sm-4"
          },{
            "name": "email",
            "type": "text",
            "label": "Email",
            "rules": {
              "required": true,
            },
            "class":"col-sm-4"
          },
          
          {
            "name": "mobile",
            "type": "number",
            "label": "Mobile",
            "rules": {
              "required": true,
            },
            "class":"col-sm-4"
          },{
            "name": "pin",
            "type": "number",
            "label": "Pin Number",
            "rules": {
              "required": false,
            },
            "class":"col-sm-4"
          },
          {
            "name": "about",
            "type": "textarea",
            "label": "About",
            "rules": {
              "required": false,
            },
            "class":"col-sm-12"
          }
        ]
    }
    
  }
  getData(evt: any) {
    this.formData = evt;
  }
  onAdd() {
    if (this.formData.invalid) {
      // throw error
      return Swal.fire('Error!!!', 'Enter required field value before register', 'error');
    }
    else {
    return this.ser.addEmployee(this.formData.value).subscribe(
      {
        next: (res) => {
          console.log(res)
          Swal.fire('Success', 'You have been added successfully', 'success');
          this.formData.reset();
          this.ser.getEmployees()
        },
        error: (err) => {
          Swal.fire('Error!!', 'Some Error occured', 'error');
        }
      }
    )
    }
  }
}
