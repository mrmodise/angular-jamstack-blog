import { Component, OnInit } from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.scss']
})
export class BlogRootComponent implements OnInit {
  posts$: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) => {
          route.route.startsWith('/blog');
        });
      })
    );
  }

}
