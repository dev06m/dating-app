import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
model: any = {};
currentUser$;
// subscription: Subscription;

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.subscription = this.accountService.currentUser$.subscribe(currentUser => {
    //   this.currentUser$ = currentUser;
    //   console.log(this.currentUser$)
    // });
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members');
    }, error => {
      //this.toastr.error(error.error);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    // this.subscription.unsubscribe;
  }

  ngOnDestroy() {
  }

}
