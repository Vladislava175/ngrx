import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectCount, updateCount} from './reducers/count/count-selectors';
import {CountState} from './reducers/count/count.reducer';
import {CountCleanAction, CountDecreaseAction, CountIncreaseAction} from './reducers/count/count.actions';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updateAt: Observable<number> = this.store$.pipe(select(updateCount));
  public disableDecrise: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store$: Store<CountState>, private router: Router) {
  }

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear() {
    this.store$.dispatch(new CountCleanAction());
  }

  ngOnInit(): void {
    // this.router.navigate(['login']);
  }
}
