import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.reset();
      this.user.UserName = '';
      this.user.Password = '';
      this.user.Email = '';
      this.user.FirstName = '';
      this.user.Lastname = '';
    }
  }

  OnSubmit(form: NgForm){
    this.userService.registerUser(form.value)
      .subscribe( response => {
        console.log(response);
      })
  }

}
