export class ListGrid<T> {
    pageSize: number = 10;
    items: T[];
    isEmpty: boolean = false;
    totalItems: number = 10;
    currentPageIndex: number =1;
    maxPageIndex:number = 10;
    itemsPerPage: number = 10;
    private _url: string;
  
    contructor(){ }
    /**
     * return the number of first row of the current page.
     */
    get pageRowStart(): number {
        if (this.currentPageIndex == 1)
            return 0;
        else {
            return this.currentPageIndex * this.itemsPerPage;
        }
    }
    /**
     * Return all row of current page
     */
    get itemsOfPage(): T[]{
        
        let pageRowEnd = this.itemsPerPage + this.pageRowStart;
        /*console.log(this.pageRowStart)
        console.log(pageRowEnd)
        console.log(this.items.slice(this.pageRowStart, pageRowEnd));*/
        return this.items.slice(this.pageRowStart, pageRowEnd);
    }
    set webServiceUrl(url:string){
        this._url = url;
    }


}