import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../services/email-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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


constructor(private formBuilder: FormBuilder, private emailService: EmailService) {}


// ngOnInit(): void {
  
// };


onSubmit(): void {
  // console.log(this.contactForm.value);
  if (this.name.invalid || this.email.invalid || this.body.invalid) {
    alert('Please review the form and try again.');
  } else {
    console.log(this.contactForm.value);
    this.emailService.sendEmail(this.name.value as string, this.email.value as string, this.body.value as string).subscribe(
      response => {
        console.log('Email sent successfully.', response);
      },
      error => {
        console.error('Error sending email.', error);
      }
    );

  }
  
}

}