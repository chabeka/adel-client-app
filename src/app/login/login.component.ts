import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';
//import {Message} from "primeng/components/common/api";

//

import { User } from '../models/user';
import { AuthentificationService } from '../services/loginServices/authentification.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  model: User;
  loading = true;
  returnUrl: String;
  // message : Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthentificationService,
    private fb: FormBuilder
  )
  {
    this.model = new User();
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  onLogin(){
    this.auth.login(this.loginFormToUserModel())
        .subscribe(currentUser => {
            //console.log(currentUser);
            if (!User.isNull(currentUser)){
                //console.log("logger");
                // go to home page
                this.router.navigate(['/home'])
            } else {
                // 
                console.log("loggin error")
            }
 	},
       response => {console.log(response)})     
  }
  
  /**
   * 
   */
  loginFormToUserModel(): User{
    
    const formModel = this.form.value;
    console.log(formModel)
    const user: User = {
      id: 0,
      username: formModel.username as string,
      email: formModel.username as string,
      password: formModel.password as string,
      token: ''
    }
    return user;
  }
}
