import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-identifiers-recall',
  templateUrl: './identifiers-recall.component.html',
  styleUrls: ['./identifiers-recall.component.css']
})
export class IdentifiersRecallComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb:FormBuilder ) { 
  
    this.form = fb.group({
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  
  onRecallIfentifiers(){
    
  }
}
