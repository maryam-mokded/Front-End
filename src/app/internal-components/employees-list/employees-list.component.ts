import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  // AddForPaginator
  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;

  dataSource!:MatTableDataSource<any>;

  ELEMENT_DATA?:User[];
  displayedColumns: string[] = ['userId','nom', 'prenom','action'];

  EmployeeList?:User[];

  constructor(
    private userServ:UserService,
  ) { }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser(){
    this.userServ.ListeUser().subscribe(ListUser =>{
      this.EmployeeList = ListUser;
      this.dataSource = new MatTableDataSource(ListUser);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort =this.matSort;
      console.log(this.dataSource);
     });
  }

  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }

}
