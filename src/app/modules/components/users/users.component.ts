import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/components/Auth/services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  RowData: any;
  ColumnOrder = ["User Name", "Role", "Active"]
  JsonKey = ["username", "role", "isActive"]
  constructor(private service: Services) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      {
        next: (res) => {
          this.RowData = res;
        }
      }
    )
  }
  onDelete(id: any) {

  }
}
