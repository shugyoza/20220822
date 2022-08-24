import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api-service/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item!: any;

  constructor(
    private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  selectUser(user: any): void {
    this.api.user$.next(user);
    this.api.getFollowers(user.followers_url)
  }

}
