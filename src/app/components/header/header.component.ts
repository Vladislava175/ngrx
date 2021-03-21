import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() triggerClick = new EventEmitter();
  @Output() navigateToMain = new EventEmitter();
  userName!: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.signOut();
  }
}
