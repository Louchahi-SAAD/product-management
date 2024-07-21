import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder,
              private route:Router,
              private authService:AuthService) {
  }


  formLogin!: FormGroup;
  errorMessage: undefined ;

  ngOnInit(): void {
      this.formLogin = this.fb.group({
          username: this.fb.control(''),
          password: this.fb.control('')
      })
    }


  handleLogin() {
    let username = this.formLogin.value.username
    let password = this.formLogin.value.password
    this.authService.login(username, password).then(resp=>{
        this.route.navigateByUrl("/admin");
    }).catch(error=>{
        this.errorMessage = error;
    });
  }
}
