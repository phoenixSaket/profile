import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = "";
  private password: string = "";
  isLoginValid: boolean = false;
  loginChecked: boolean = false;
  errorString: string;
  screen: any = {
    width: 0,
    height: 0,
  }
  constructor(private router: Router, private service: NotesServiceService) {
    this.screen.width = screen.width;
  }

  ngOnInit(): void {
    let [email, password] = [localStorage.getItem("Email"), localStorage.getItem("Password")];
    if (email && email.length > 0 && password && password.length > 0) {
      this.router.navigate(["/notes"]);
      this.checkLogin({ email: email, password: password });
    } else {
      this.router.navigate(["/"]);
    }
  }

  checkLogin(event) {
    // event.preventDefault();
    this.loginChecked = true;
    let [email, password] = [localStorage.getItem("Email"), localStorage.getItem("Password")];


    this.service.loginData.default.data.forEach(element => {
      if (this.email === element.email) {
        if (this.password === element.password) {
          this.isLoginValid = true;
          this.service.setCurrentLogin(element);
          this.router.navigate(["/notes"]);
         
        } else {
          this.errorString = "||    INVALID CREDENTIALS     ||";
          this.isLoginValid = false;
        }
      } else {
        this.errorString = "||     INVALID CREDENTIALS     ||";
        this.isLoginValid = false;
      }
    });
  }

  mailChanged(event) {
    this.email = event.target.value;
  }

  passChanged(event) {
    this.password = event.target.value;
  }
}
