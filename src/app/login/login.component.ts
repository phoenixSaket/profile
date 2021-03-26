import { Component, OnInit } from '@angular/core';
import * as loginData from '../data-files/login-data.json';
// import { MatInputModule } from 'MaterialModule';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = "";
  private password: string = "";
  private isLoginValid: boolean = false;
  private loginChecked: boolean = false;
  private errorString: string;

  constructor() { }

  ngOnInit(): void {
    console.log(loginData);
  }

  checkLogin(event) {
    event.preventDefault();
    this.loginChecked = true;
    loginData.default.data.forEach(element => {
      if (this.email === element.email) {
        if (this.password === element.password) {
          console.log("||     M-U-B-A-R-A-K-A     ||");
          this.errorString = "||     MUBARAKA     ||"; 
          this.isLoginValid = true;
        } else {
          console.log("AALA MOTHA SHAHANA");
          this.errorString = "||     A-A-L-A     M-O-T-H-A     S-H-A-H-A-N-A     ||"; 
          this.isLoginValid = false;
        }
      } else {
          console.log("AALA MOTHA SHAHANA");
          this.errorString = "||     AALA  MOTHA  SHAHANA     ||";
          this.isLoginValid = false;
        }
      }
    );

  }

  mailChanged(event) {
    console.log("Mail : ", event.target.value);
    this.email = event.target.value;
  }

  passChanged(event) {
    console.log("Password : ", event.target.value);
    this.password = event.target.value;
  }
}
