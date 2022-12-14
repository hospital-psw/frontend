import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forbidden-page',
  templateUrl: './forbidden-page.component.html',
  styleUrls: ['./forbidden-page.component.scss']
})
export class ForbiddenPageComponent implements OnInit {

  private returnUrl: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

   ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
   public navigateToLogin = () => {
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.returnUrl }});
  }

}
