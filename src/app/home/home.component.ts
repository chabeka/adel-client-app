import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EJComponents, GridComponent } from 'ej-angular2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // Properties
  
  public gridData: any;
  public dataManager;
  public editSettings: any;
  public toolbarSettings: any;
  public grid:GridComponent
  
  
  constructor() { 
  
    this.dataManager = new ej.DataManager({
                                url: "http://mvc.syncfusion.com/Services/Northwnd.svc/Orders/",
                                adaptor: new ej.ODataAdaptor()
                             });  
    this.gridData = this.dataManager; 
    console.log(">>>>>>>");
    console.log(this.dataManager) 
    
    //
    this.editSettings={allowAdding: true, allowEditing: true, allowDeleting: true };
    this.editSettings={allowAdding: true, allowEditing: true, allowDeleting: true };
    this.toolbarSettings={ showToolbar: true,toolbarItems: ["add","edit","delete","update","cancel"]};
    
    
  }

  ngOnInit() {
  }
  
  onRowSelected($event): void{
    console.log("rowSelected($event)")  
    console.log($event)  
  }
}
