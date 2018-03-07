import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personview',
  templateUrl: './personview.component.html',
  styleUrls: ['./personview.component.css']
})
export class PersonviewComponent implements OnInit {
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
        this.visible = true;
      }
        
    close() {
      this.visible = false;
      this.visibleChange.emit(this.visible);
    }
  }
