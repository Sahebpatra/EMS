import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/components/Auth/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
data:any;
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.getEmployee()
  }
getEmployee(){
  this.service.getEmployees().subscribe(
    {
      next:(res)=>{
       this.data=res;
       console.log(res)
      },
    error:(err)=>{
      console.log(err)
    }     }
  )
}
  onDelete(id:any){
    console.log(id)
    Swal.fire({
      title: 'Are you sure? ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Data removed successfully.', 'success');
        this.service.deleteEmployee(id).subscribe((res=>{
          this.getEmployee()
         })
         )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.getEmployee()
      }
    })

  }

}
