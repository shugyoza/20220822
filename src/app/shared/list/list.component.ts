import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() displayedItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.displayedItems = this.items.slice(0, 10)
  }

  showMore(len: number): void {
    let newLen = len ? len + 10 : 10;
    this.displayedItems = this.items.slice(0, newLen);
  }
}
