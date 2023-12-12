import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalForm:FormGroup;
  data:any;
  constructor(private router: Router,private fb: FormBuilder,private http:HttpClient, private api: ApiService) {
    this.personalForm=this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
      
    })
  }
  ngOnInit(): void {
    
  }
  postdata() {
    if (this.personalForm.valid && this.personalForm.value.Password === this.personalForm.value.ConfirmPassword) {
      
      
      this.http.post("http://localhost:3000/posts", this.personalForm.value).subscribe((res) => {
        console.log(this.personalForm.value);
        alert("Successfully signed in..");
      this.router.navigate(['/medical']);
       });
  
    } else {
      alert("Form is not valid or passwords do not match");
    }
  }
  
  };
  
