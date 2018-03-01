import { User } from "../../models";
import { ListGrid } from "../../shared/grid/listgrid";
import { Component, OnInit, ViewChild  } from '@angular/core';
import {PersonviewComponent} from '../personview/personview.component';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-persongrid',
    templateUrl: './persongrid.component.html',
    styleUrls: ['./persongrid.component.css']
})
export class PersongridComponent implements OnInit {

    @ViewChild(PersonviewComponent) personView: PersonviewComponent;
    listGrid: ListGrid<User>;
    listUsers: User[]= new Array();
    private i:number = 0;
    private currentPageIndex: number;
    
  constructor(private usersService: UserService) { 
    
    console.log( "--- PersonGridComponent ---")
    this.listGrid = new ListGrid<User>();
    
    for ( this.i; this.i<250; this.i++){
        this.listUsers.push(new User(this.i, 'aliou - ' + this.i,`aliou${this.i}`, `aliou${this.i}@yahoo.fr` ));   
    }
    console.log(this.listUsers.length)
    this.listGrid.items = this.listUsers;
    if (this.listGrid.items.length > 0){
      this.listGrid.isEmpty = false
    }
    console.log(this.listGrid.items.length);
    console.log(this.listUsers.length)
  
  }
  

  ngOnInit() {
  }
  
  get pageIndex(): number{
      console.log(this.currentPageIndex);
      return 0;
  }
  
  pageNumberChanged(event){
      console.log(event)
      this.listGrid.currentPageIndex = event;
      this.usersService.getPagingUsers(this.listGrid.currentPageIndex, this.listGrid.itemsPerPage ).subscribe(allUsers => {
          console.log(">>pageNumberChanged")
          //this.listUsers = allUsers;
          this.listGrid.items = allUsers;
      });
  }
}
