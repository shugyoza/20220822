import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './api-service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = '20220822';
  subscriptions$: Subscription[] = [];

  constructor(private api: ApiService) { }

  onSubmit(_query: string = ''): void {
    console.log(17, _query)
    this.api.getUsers(_query);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((sub$: Subscription) => sub$.unsubscribe());
  }
}
