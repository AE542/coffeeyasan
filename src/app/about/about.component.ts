import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

name = new FormControl('', [
  Validators.required,
  Validators.minLength(5)
]);
email = new FormControl('', [
  Validators.required,
  Validators.email,
]);
body = new FormControl('', [
  Validators.required,
  Validators.minLength(10)
]);

contactForm: FormGroup = this.formBuilder.group({
name: this.name,
email: this.email,
body: this.body
});


constructor(private formBuilder: FormBuilder) {}


ngOnInit(): void {
  
};


onSubmit(): void {
  console.log(this.contactForm.value);
}

}