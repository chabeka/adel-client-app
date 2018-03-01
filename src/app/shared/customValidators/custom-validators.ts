
import { FormControl, AbstractControl } from "@angular/forms";

export class CustomValidators {
  
  static email(control:FormControl){
      
      let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      console.log(EMAIL_REGEXP.test(control.value));
    /*
      return EMAIL_REGEXP.test(control.value) ? null : {
          ValidateEmail: {
            valid: false
          } 
      };
      
     */
    if (!EMAIL_REGEXP.test(control.value)){
      return { "Please provide a valid email": true };
    }
  }
  
  static password(control: FormControl){
    
  }
  
  static matchPassword(ac: AbstractControl){
      let password = ac.get('password').value;
      let passwordConfirm = ac.get('passwordconfirm').value;
    
      if (password != passwordConfirm){
        ac.get('passwordconfirm').setErrors({matchPassword: true})
      } else {
        return null;
      }
  }
  
}
