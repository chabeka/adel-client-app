import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../loader/loader.service';
import {Subscription} from 'rxjs/Subscription';
import { LoaderState } from './LoaderState'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    show:boolean = false;
    private subscription: Subscription;
    
    constructor(private loaderService: LoaderService) { }

    ngOnInit() {
        this.subscription = this.loaderService.loaderState.subscribe((state:LoaderState) => 
            {
            this.show = state.show;
            }
        );
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}
