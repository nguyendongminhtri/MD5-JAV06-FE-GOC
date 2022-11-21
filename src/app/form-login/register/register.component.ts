import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SignUpForm} from '../../model/SignUpForm';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  emailFormControl = new FormControl('', [
    Validators.email
  ]);
  hide: boolean;
  status = 'Please fill in the form to create your account!';
  signUpForm: SignUpForm;
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
    )
  this.authService.signUp(this.signUpForm).subscribe(data => {
    console.log('data ----> ', data);
    console.log('email --> ', this.emailFormControl.status);
    if(data.message === 'nouser'){
      this.status = 'The username is existed! Please try again!'
      return;
    }
    if(data.message === 'noemail'){
      this.status = 'The email is existed! Please try again!'
      return;
    }
    if(data.message === 'yes'){
      this.status = 'Create Account Success!';
      localStorage.setItem('SUCCESS_KEY', this.status);
      this.router.navigate(['login'])
    }
  }, error => {
    this.status = 'The email invalid! Please try again!'
  })
  }

}
