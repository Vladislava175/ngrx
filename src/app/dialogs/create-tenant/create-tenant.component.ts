import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {TenantState} from '../../store/tenant-details/tenant.reducer';
import {CreateTenantAction, CreateUserAction, GetOriginAction} from '../../store/tenant-details/tenant.actions';
import {Observable} from 'rxjs';
import {TenantDetailsState} from '../../service/tenant-details-state';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validateWhitespace} from '../../shared/validators';
import {map} from 'rxjs/operators';
import {isNumeric} from 'rxjs/internal-compatibility';
import {selectTenantId} from '../../store/tenant-details/tenant-selectors';


@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.scss']
})
export class CreateTenantComponent implements OnInit {
  origins$: Observable<any[]> = this.state.getOrigins();
  userForm: FormGroup = new FormGroup({});
  public disableUser$: Observable<boolean> = this.state.getTenantId().pipe(map(tenantId => tenantId !== undefined));

  constructor(
    public dialogRef: MatDialogRef<CreateTenantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public state: TenantDetailsState,
    private store$: Store<TenantState>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetOriginAction());
    this.state.initTenant();
    this.initUser();
  }


  initUser() {
    this.userForm = this.fb.group({
      userName: ['ttt', [Validators.required, validateWhitespace]],
      lastName: ['rrrrr', [Validators.required, validateWhitespace]],
      phone: ['972528188237', [Validators.required]],
      mail: ['vladazhyg@gmail.com', [Validators.required, Validators.email]]
    });
  }

  saveTenant() {
    const t = this.state.tenantForm.getRawValue();
    let tenant = {
      name: t.name,
      country: {
        id: 100,
        iso_code: 'IL',
        name: 'ISRAEL'
      },
      // creation_date: new Date(),
      origin: t.origin,
      status: {
        id: 1,
        name: 'New'
      },
      business_id: t.businessCode
    };
    this.store$.dispatch(new CreateTenantAction({tenant: tenant}));
  }

  saveUser() {
    let tenantId$ = this.store$.pipe(select(selectTenantId));
    const u = this.userForm.getRawValue();
    let user = {
      'username': u.mail,
      'phone': u.phone,
      'password': 'string',
      'first_name': u.userName,
      'last_name': u.lastName,
      'status': '1',
      'creation_date': '2021-02-07T09:34:10',
      'is_asked_to_forward_sms': false
    };


    tenantId$.subscribe(res => {
      console.log('res', res);
      this.store$.dispatch(new CreateUserAction({user: user, tenantId: res}));
    });
  }

  // 972528188237
  checkNumberValidation(e: any) {
    if (e.value.length < 5) {
      this.userForm.patchValue({phone: '9725'});
    }
    if (e.value.length >= 13) {
      this.userForm.patchValue({phone: e.value.substr(0, 12)});
    }
    const lastCharacter = e.value.split('').pop();
    // @ts-ignore
    if (!isNumeric(+lastCharacter)) {
      this.userForm.patchValue({phone: e.value.slice(0, -1)});
    }
  }
}
