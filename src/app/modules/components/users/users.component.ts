import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/components/Auth/services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data:any;
  Active:any;
  constructor(private service:Services) { }

  ngOnInit(): void {
this.service.getUsers().subscribe(
  {
    next:(res)=>{
      console.log(res);
      debugger
      this.Active=res.isActive==1? 'Yes':'No';
      this.data=res;

    }
  }
)
  }



  onDelete(id:any){

  }
}
