import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  constructor(private router: Router) {}
  id: string = 'home';
  isLoggedIn = localStorage.getItem('isAuthenticated') == 'true' ? true : false;

  ngOnInit() {}

  setId(id: any) {
    this.id = id;
  }

  logout() {
    location.reload()
    localStorage.setItem('isAuthenticated', 'false');
  }
}
