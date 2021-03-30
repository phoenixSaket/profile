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
    console.log(this.service.loginData);
  }

  checkLogin(event) {
    event.preventDefault();
    this.loginChecked = true;
    this.service.loginData.default.data.forEach(element => {
      if (this.email === element.email) {
        if (this.password === element.password) {
          console.log("||     M-U-B-A-R-A-K-A     ||");
          this.errorString = "||     MUBARAKA     ||"; 
          this.isLoginValid = true;
          this.router.navigate(["/notes"]);
        } else {
          console.log("AALA MOTHA SHAHANA");
          this.errorString = "||     AALA     MOTHA     SHAHANA     ||"; 
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
