import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TenantDetailsState} from '../../service/tenant-details-state.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  tenantDetails$: Observable<any> = this.state.getTenantDetails();

  constructor(private state: TenantDetailsState) {
  }

  ngOnInit(): void {
  }

}
