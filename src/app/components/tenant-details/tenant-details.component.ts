import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {TenantState} from '../../store/tenant-details/tenant.reducer';
import {GetTenantAction} from '../../store/tenant-details/tenant.actions';
import {Observable} from 'rxjs';
import {TenantDetailsState} from '../../service/tenant-details-state.service';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit {

  tenantHeaderData$: Observable<any> = this.state.getTenantHeaderData();

  constructor(private route: ActivatedRoute, private store$: Store<TenantState>, private state: TenantDetailsState) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      let id = p['id'];
      this.store$.dispatch(new GetTenantAction({tenantId: id}));
    });
  }

}
