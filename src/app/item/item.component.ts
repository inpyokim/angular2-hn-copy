import { Component, Input, OnInit } from '@angular/core';

import { HackerNewsAPIService } from '../hackernews-api.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() itemID: number;
  item;
  
  // constructor() { }
  // ngOnInit() { }

  constructor(private _hackerNewsAPIService: HackerNewsAPIService) { }

  ngOnInit() {
    this._hackerNewsAPIService.fetchItem(this.itemID)
            .subscribe(
              data => { 
                this.item = data; 
                // console.log( `item[${this.itemID}] = "${this.item['title']}"` ); 
              }, 
              error => console.log('Could not load item' + this.itemID)
            );
  }

}
