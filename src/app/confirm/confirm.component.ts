import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  datas: any;
  items: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getData();
    this.inData();
  }


  closePage() {
    // Add your login logic here if needed
    alert('Register successful!');

  }

  login() {
    alert('Please Login');
  }


  getData() {
    this.http.get('http://localhost:3000/posts/').subscribe(res => {
      this.datas = res;
      console.log();

    })


  }
  inData() {
    this.http.get('http://localhost:3000/info/').subscribe(res => {
      this.items = res;
      console.log();

    })


  }
}
