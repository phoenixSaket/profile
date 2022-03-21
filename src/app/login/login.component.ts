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
  }

  checkLogin(event, isGuestLogin?) {
    // event.preventDefault();
    let [email, password] = [this.email, this.password];
    if (event == null && isGuestLogin) {
      [email, password] = ["guest", "pass"];
    }
    this.loginChecked = true;
    let error = false;

    let data = this.service.getLoginData(email, password);
    if (data) {
      console.log("Login Successful");
      error = false;
      this.isLoginValid = true;
      this.service.setCurrentLogin(data);
      this.router.navigate(["/notes"]);
    }
    if (!!data) {
      console.log("Error : ");
      error = true;
      this.errorString = "||    INVALID CREDENTIALS     ||";
      this.isLoginValid = false;
    }
  }

  doGuestLogin() {
    this.checkLogin(null, true);
  }

  mailChanged(event) {
    this.email = event.target.value;
  }

  passChanged(event) {
    this.password = event.target.value;
  }
}
