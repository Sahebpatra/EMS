import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Services } from 'src/app/components/Auth/services.service';

@Component({
  selector: 'app-get-employee-by-id',
  templateUrl: './get-employee-by-id.component.html',
  styleUrls: ['./get-employee-by-id.component.css']
})
export class GetEmployeeByIdComponent implements OnInit {
  empForm!: FormGroup;
  Id: any;
  constructor(private ser: Services, private fb: FormBuilder,private ar: ActivatedRoute) { }

  ngOnInit(): void {

    this.empForm = this.fb.group(
      {
        id: [''],
        name: [''],
        department: [''],
        email: [''],
        mobile: [''],
        country: [''],
        state: [''],
        city: [''],
        pin: ['']
      }
    )
    

    this.ar.paramMap.subscribe((param: Params) => {
      this.Id = param['get']('id')
    });

  
    this.ser.getEmployeeById(this.Id).subscribe(
      {
        next:(res)=>{
          console.log(res)
          this.empForm=this.fb.group(
            {
              id: [res.id],
              name: [res.name],
              department: [res.department],
              email: [res.email],
              mobile: [res.mobile],
              country: [res.country],
              state: [res.state],
              city: [res.city],
              pin: [res.pin] 
            }
          )
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
