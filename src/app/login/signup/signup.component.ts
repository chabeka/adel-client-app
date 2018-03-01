import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service'
import { CustomValidators } from "../../shared/customValidators/custom-validators";
import { LoggerService } from "../../shared/logger.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  title: string;
  user: User = new User();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UserService,
    private logger: LoggerService
  ) {
    this.signupForm = formBuilder.group(
    {
      
      email: ['', [
        Validators.required,
        CustomValidators.email,
      ]],
      password:['', Validators.required],
      passwordconfirm:['', Validators.required],
    },
    {
      validator: CustomValidators.matchPassword
    }
    );
  }

  ngOnInit() {
    
  }

  onSignup() {
    var result,
        userValue = this.signupForm.value; 
    console.log(userValue.email);
    if (userValue.id){
      //result = this.usersService.updateUser(userValue);
    } else {
      result = this.usersService.addUser(userValue);
    }
    console.log(result);
    result.subscribe(data => this.router.navigate(['users']));
  }
}