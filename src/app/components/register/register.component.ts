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
      name: ["", [Validators.required, Validators.maxLength(150)]],
      phone: ["", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      dni: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      department: ["", [Validators.required, Validators.maxLength(50)]],
      district: ["", [Validators.required, Validators.maxLength(50)]],
      address: ["", [Validators.required, Validators.maxLength(50)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      birthday: ["", [Validators.required]],
      sex: ["", [Validators.required]]
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
