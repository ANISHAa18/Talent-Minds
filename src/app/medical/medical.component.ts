import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  medicalForm: FormGroup;
  item: any;

  constructor(private router: Router, private ff: FormBuilder, private http: HttpClient) {
    this.medicalForm = this.ff.group({
      date: ['', [Validators.required]],
      datemin: ['', [Validators.required]],
      rose: ['', [Validators.required]],
      datemax: ['', [Validators.required]],
      fn: ['', [Validators.required]],
      ln: ['', [Validators.required]],
      toggle: ['', [Validators.required]]

    })
  }
  ngOnInit(): void {

  }


  goToPersonal1() {
    
    this.router.navigate(['/personal']);
  }
  

  medicaldata() {
    this.http.post("http://localhost:3000/info", this.medicalForm.value).subscribe(res => {
      console.log(this.medicalForm.value);
      this.router.navigate(['/consent']);
      
    });
  }
}
