import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  tenantDetails$: Observable<any> = this.state.getTenantDetails();

  constructor(private route: ActivatedRoute,
              private store$: Store<TenantState>,
              private state: TenantDetailsState) {
    /*    this.route.parent?.params.subscribe(params => {
          debugger
          this.store$.dispatch(new GetTenantAction({tenantId: params.id}));
        });*/
  }

  ngOnInit(): void {
  }

}
