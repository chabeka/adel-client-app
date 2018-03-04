import { User } from "../../models";
import { ListGrid } from "../../shared/grid/listgrid";
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
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
    
  constructor(private usersService: UserService, private router:Router) { 
    
    console.log( "--- PersonGridComponent ---")
    this.listGrid = new ListGrid<User>();
    for ( this.i; this.i<250; this.i++){
        this.listUsers.push(new User(this.i, 'aliou - ' + this.i,`aliou${this.i}`, `aliou${this.i}@yahoo.fr` ));   
    }
    //console.log(this.listUsers.length)
    this.listGrid.items = this.listUsers;
    if (this.listGrid.items.length > 0){
      this.listGrid.isEmpty = false
    }
    //console.log(this.listGrid.items.length);
    //console.log(this.listUsers.length)
  
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
          //this.listUsers = allUsers;
          this.listGrid.items = allUsers;
      });
  }
  searchField(event): void{
      //console.log(event)
      this.usersService.findUsers(event).subscribe( allUsers => {
          this.listGrid.items = allUsers;
      });
  }
  /**
   * Redirect to the user edition page when we click on row
   */
    editRow(user:User){
        console.log(user)
        let idUser = user.id;
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "idUser": idUser,
            }
        };
        this.router.navigate(["edit-user"], navigationExtras);
    }
}

