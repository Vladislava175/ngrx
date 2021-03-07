import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {
    if (!this.storageService.getItem('token')) {
      this.authService.completeSignIn().then((res: any) => {
        this.storageService.setItem('token', res.access_token);
        this.router.navigate(['tenants-list']);
      });
    }
  }
}
