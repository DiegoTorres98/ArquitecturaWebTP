import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-camp';
  showPrincipalHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: any) => {
      if(event.url === '/login' || event.url === '/registrar') {
        this.showPrincipalHeader = false;
      } else {
        this.showPrincipalHeader = true;
      }
    });
  }

}
