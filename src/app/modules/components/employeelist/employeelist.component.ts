import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/components/Auth/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  RowData:any;
  hideColumn=['id','about'];
  constructor(private service: Services,private router:Router) { }

  ngOnInit(): void {
    this.getEmployee()
  }
  getEmployee() {
    this.service.getEmployees().subscribe(
      {
        next: (res) => {
          this.RowData=res;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }
  onEdit(evt){
      this.router.navigate([`/admin/employee/edit/${evt.id}`])
  }
  onView(evt){
     this.router.navigate([`/admin/employee/view/${evt.id}`])
  }
  onDelete(id: any) {
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
        this.service.deleteEmployee(id).subscribe((res => {
          this.getEmployee()
        })
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.getEmployee()
      }
    })

  }

}
