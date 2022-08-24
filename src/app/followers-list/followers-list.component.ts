import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit, OnDestroy {

  followers: any[] = [];
  subscriptions$: Subscription[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.subscriptions$.push(
      this.api.followers$.subscribe({
        next: (list: any) => {
          if (list && list.length) this.followers = list;
        },
        error: (err: Error) => console.error(err)
      })
    );
  };

  ngOnDestroy(): void {
    this.subscriptions$.forEach((sub$: Subscription) => sub$.unsubscribe());
  }

}
