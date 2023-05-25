import { Component } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 /* This is a TypeScript code for an Angular component that represents a navbar. */
  // constructor() {}

  // constructor(private router : Router) {}
 /**
  * The function navigates to the "about" page using the Angular router.
  */
  // aboutClick() {
  //   this.router.navigate(['/about']);
  // }

  isNavbarExpanded: boolean = false;

  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
}
