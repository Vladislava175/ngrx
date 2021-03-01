import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit {

  constructor(private store$: Store<TenantState>) {
  }

  ngOnInit(): void {
  }

}
