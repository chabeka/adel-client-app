import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {LoaderState} from './LoaderState';

@Injectable()
export class LoaderService {

    private subject = new Subject<LoaderState>();
    loaderState = this.subject.asObservable();
    
    constructor() { }

    hide(){
        this.subject.next(<LoaderState>{show:false})
    }
    show(){
        this.subject.next(<LoaderState>{show:true});
    }
}
