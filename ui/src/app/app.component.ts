import { Component, OnInit, enableProdMode } from '@angular/core';
import { ProductService } from './product.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Service } from './calendar.service';
import { RouterModule, RouteReuseStrategy, Router } from '@angular/router';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [Service]
})

export class AppComponent implements OnInit {
  title = 'program-manager';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private productService: ProductService, private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit() {
  }

  openPersonalCalendar() {
    this.router.navigateByUrl('/personalcalendar');
  }
  openAssigneeCalendar() {
    this.router.navigateByUrl('/assigneecalendar');
  }
}


