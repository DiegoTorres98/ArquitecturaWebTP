import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      dni: ["", Validators.required],
      department: ["", Validators.required],
      district: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      birthday: ["", Validators.required],
      sex: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register() {
    if(this.userForm.valid) {
      this.userService.register(this.userForm.value);
    }
  }

}
