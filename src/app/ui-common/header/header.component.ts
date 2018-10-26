import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUrl: String;

  constructor(private router: Router) {
    router.events.subscribe((event: NavigationEnd) => this.currentUrl = router.url)
  }

  ngOnInit() {
  }

}
