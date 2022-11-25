import {Injectable, OnInit} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from '../service/token.service';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, OnInit {
   checkRole: string;
  constructor(private tokenService: TokenService,
              private router: Router,
              private authService: AuthService) {
  }
  async checkRoleGuard() {
    this.authService.checkRole().subscribe(role => {
      console.log('role ===========>', role.message);
      if (role.message === 'admin') {
        this.checkRole = 'admin';
        console.log('trong ---<', this.checkRole);

      }
      if (role.message === 'user') {
        this.checkRole = 'user';

      }
      if (role.message === 'pm') {
        this.checkRole = 'pm';
      }
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.tokenService.getToken()) {
      console.log('tokennnnnnnnnnnnnnnn --->', this.tokenService.getToken());

  this.checkRoleGuard();
      // this.authService.checkRole().subscribe(role => {
      //   console.log('role ===========>', role.message);
      //   if (role.message === 'admin') {
      //     this.checkRole = 'admin';
      //     console.log('trong ---<', this.checkRole);
      //
      //   }
      //   if (role.message === 'user') {
      //     this.checkRole = 'user';
      //
      //   }
      //   if (role.message === 'pm') {
      //     this.checkRole = 'pm';
      //   }
      // });
      console.log('this.checkRole ---> ', this.checkRole);
  if(this.checkRole==='admin'){
    console.log('VAO CHECK KHONG ---------------------------');
    return true;
  } else {
    this.router.navigate([''])
  }

      // console.log('roles --->', this.tokenService.getRole());
      // console.log('check ------> ', JSON.stringify(this.tokenService.getRole()) == JSON.stringify(['ADMIN']));
      // if (this.checkRole === 'admin') {
      //   return true;
      // }
    } else {
      this.router.navigate(['login']);
    }

  }

  ngOnInit(): void {

  }

}
