import {
    Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-pagination',
    styleUrls: ['./pagination.component.css'],
    template: `
    <div class="pagination">
        <input [(ngModel)]="searchFieldValue" type="text" placeholder="search" class="serach-input" (keyup)="setSearchField($event)"/>
        <ul class="" >     
            <li [class.disabled]="currentPageNumber === 1 || !maxPageIndex">
                <a href aria-label="Previous" 
                    (click)="setCurrentPage(currentPageNumber - 1, $event)">
                    <span aria-hidden="true">‹</span>
                </a>
            </li>
            <li [class.active]="currentPageNumber === 1" >
                <a href (click)="setCurrentPage(1, $event)" >
                    <span aria-hidden="true">1</span>
                </a>
            </li>
            <li *ngIf=" currentPageNumber >= 5 ">
                <a href aria-label="Previous" 
                    (click)="setCurrentPage(currentPageNumber - 1, $event)">
                    <span aria-hidden="true">&hellip;</span>
                </a>
            </li>
            <li *ngFor="let index of range(pageStartNumber +1 , pageEndNumber - 1)" 
                        [class.active]="currentPageNumber === index">
                <a href (click)="setCurrentPage(index, $event)">
                    <span >{{ index }}</span>
                </a>
            </li>
            <li *ngIf=" currentPageNumber != maxPageIndex && currentPageNumber <= maxPageIndex -5 ">
                <a href (click)="setCurrentPage(currentPageNumber + 1, $event)" aria-label="Last">
                    <span aria-hidden="true">&hellip;</span>
                </a>
            </li>
            <li [class.active]="currentPageNumber === maxPageIndex ">
                <a href (click)="setCurrentPage(maxPageIndex, $event)" aria-label="Last">
                    <span aria-hidden="true">{{maxPageIndex}}</span>
                </a>
            </li>
            <li [class.disabled]="currentPageNumber === maxPageIndex 
                                  || !maxPageIndex">
                <a href (click)="setCurrentPage(currentPageNumber + 1, $event)" aria-label="Last">
                    <span aria-hidden="true">›</span>
                </a>
            </li>
        </ul>
    </div>    
    `
})
export class PaginationComponent implements OnInit, OnChanges{
    @Input() maxPageIndex: number;
    @Input() rowChanged: Observable<number>;
    @Output() pageNumberChanged = new EventEmitter();
    @Output() searchField = new EventEmitter();
    currentPageNumber: number = 1;
    private searchFieldValue:string;
    private timeout = null;

    ngOnInit() {
        this.setCurrentPage(1);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['maxPageIndex']) {
            let change = changes['maxPageIndex'];
            if (this.currentPageNumber > change.currentValue) {
                // throws ExpressionChangedAfterItHasBeenCheckedException
                // if there's no setTimeout.
                // no need to add setTimeout if ngOnChanges 
                // is fired after changes made on root component.
                setTimeout(() => this.setCurrentPage(1), 1);
            }
        }
    }

    setCurrentPage(pageNumber: number, event?: MouseEvent): void {
        if (event) {
            event.preventDefault();
        }
        if (pageNumber === 0 || pageNumber > this.maxPageIndex
            || pageNumber === this.currentPageNumber) {
            return;
        }

        this.pageNumberChanged.emit(pageNumber);

        if (!this.rowChanged) {
            this.currentPageNumber = pageNumber;
        }
    }
    setSearchField(event:any): void{
        if (event) {
            event.preventDefault();
        }
        //console.log(this.timeout)
        clearTimeout(this.timeout);
        //this.searchField.emit(this.textValue);
        this.timeout = setTimeout(() => {
            //console.log(this.textValue)
            this.searchField.emit(this.searchFieldValue);
            //console.log(this.timeout);
        }, 3000);
        
    }

    range(min: number, max: number): number[] {
        let result = [];
        for (let i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    }

    get pageStartNumber(): number {
        let startNumber = this.currentPageNumber <= 4
            ? 1
            : this.currentPageNumber >= this.maxPageIndex - 3
                ? this.maxPageIndex - 6
                : this.currentPageNumber - 3;
        return startNumber < 1 ? 1 : startNumber;
    }

    get pageEndNumber(): number {
        let pageEnd = this.pageStartNumber + 6;
        return pageEnd > this.maxPageIndex ? this.maxPageIndex : pageEnd;
    }
}
