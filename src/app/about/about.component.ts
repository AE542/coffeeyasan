import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
// userName = document.getElementById("name");
// email = document.getElementById("email");
// input = document.getElementById("text");
// button = document.getElementById("submit-button").addEventListener("click", function(event) {
//   event.preventDefault();
// });
contactForm = this.formBuilder.group({
  name: '',
  email: '',
  body: ''
  });

constructor(private formBuilder: FormBuilder) {}


ngOnInit(): void {
  
};


onSubmit(): void {
  console.log(this.contactForm.value);
}

}