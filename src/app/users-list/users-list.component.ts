import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users$!: ReplaySubject<any>;
  subscriptions$: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.users$ = this.api.users$;
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach((sub$: any) => sub$.unsubscribe());
  }
}
