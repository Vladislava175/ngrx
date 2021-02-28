import {Country} from './country';
import {TenantStatus} from './tenant-status';
import {Origin} from './origin';
import {User} from './user';

export interface Tenant {
  id: number;
  name: string;
  country: Country;
  uid: string;
  creation_date: string;
  status: TenantStatus;
  business_id: string;
  origin: Origin;
  user: User;
  otp_phone_number: string;
  username: string;
  phone: string;
  userName: string;
}
