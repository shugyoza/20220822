import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Output() onType = new EventEmitter<any>();
  subscriptions$: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  searchForm = new FormControl('');

  debounceEmit(): void {
    // this.subscriptions$.push(
    //   this.api.debounceInput(this.searchForm.valueChanges, 600, this.subscriptions$)
    // )
    this.subscriptions$.push(
      this.api.debounceInput(this.searchForm.valueChanges, this.onType, 600, this.subscriptions$)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((subscription$: any) => subscription$.unsubscribe())
  }
}
