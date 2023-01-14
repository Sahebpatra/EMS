import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Services } from 'src/app/components/Auth/services.service';
import Swal from 'sweetalert2';
import { __param } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  formOptions!: any;
  formData!:any;
  AutopopulateData:any;
  Id: any;
  constructor(private ser: Services, private fb: FormBuilder, private ar: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
   
    this.ar.paramMap.subscribe((param: Params) => {
      this.Id = param['get']('id')
    });

    this.ser.getEmployeeById(this.Id).subscribe(
      {
        next: (res:any) => {
          this.AutopopulateData=res
          this.formOptions = {
            "formname": "Edit Employee",
            "formFields":
              [
                {
                  "name": "id",
                  "type": "number",
                  "label": "Id",
                  "disabled":true,
                  "class":"col-sm-6",
                  "hidden":true
                },
                {
                  "name": "name",
                  "type": "text",
                  "label": "Employee Name",
                  "rules": {
                    "required": true,
                    "maxlength": 10,
                  },
                  "class":"col-sm-6",
                  "hidden":false
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
    // this.formOptions.forEach((element: any) => {
    //   this.form.controls[element.name].patchValue(this.formValue[element.name])
    // });

    // Object.keys(this.formOptions.formFields).forEach(key=>{
    //   this.form.controls[key].patchValue(res[key])
    // })

          // this.empForm.controls['id'].setValue(res.id)
          // this.empForm.controls['name'].setValue(res.name)
          // this.empForm.controls['department'].setValue(res.department)
          // this.empForm.controls['email'].setValue(res.email)
          // this.empForm.controls['mobile'].setValue(res.mobile)
          // this.empForm.controls['country'].setValue(res.country)
          // this.empForm.controls['state'].setValue(res.state)
          // this.empForm.controls['city'].setValue(res.city)
          // this.empForm.controls['pin'].setValue(res.pin)
          
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
   
  }
  getData(evt: any) {
    this.formData = evt;
    console.log(this.formData)
  }
  onEdit() {
    if (this.formData.invalid) {
      // throw error
       Swal.fire('Error!!!', 'Enter required field value before Update', 'error');
    }
    else {
    this.ser.editEmployee(this.formData.value).subscribe(
      {
        next: (res) => {
          console.log(res)
          Swal.fire('Success', 'Record updated successfully', 'success');
          this.router.navigate(['adminemployees'])
        },
        error: (err) => {
          console.log(err)
          Swal.fire('Success', 'Some error ocurresd!!', 'error');
        }
      }
    )
    }
  }
}
