import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersongridComponent } from './persongrid/persongrid.component';
import { PersonviewComponent } from './personview/personview.component';
import { PersoneditComponent } from './personedit/personedit.component';
import { ListGridModule } from '../shared/grid/list-grid.module';

@NgModule({
  imports: [
    CommonModule,
    ListGridModule
    
  ],
  declarations: [PersongridComponent, PersonviewComponent, PersoneditComponent],
  exports: [PersongridComponent, PersonviewComponent, PersoneditComponent]
})
export class PersonnesModule { }
