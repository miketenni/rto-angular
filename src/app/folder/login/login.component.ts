import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder ) { }

  login:FormGroup=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]

  })

  ngOnInit(): void {
  }


  onSubmit(){
    console.log("working")
  }
}
