import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MailService } from '../mail.service';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  mailForm = this.fb.group({
    name: ['', Validators.required],
    to: ['chandanbhindwar@outlook.com'],
    cc: ['chandan.kr.bhindwar@gmail.com'],
    from: ['', Validators.required],
    subject: ['', Validators.required],
    html: ['', Validators.required]
  });

  constructor(private title: Title, private fb: FormBuilder, private mailService: MailService) {
    this.title.setTitle('Contact Me');
  }

  ngOnInit(): void {
    this.mailService.getTest().subscribe(data => {
      console.log('Server Test Data ', data);
    });
  }


  mailFormSubmit() {
    console.log('this.mailForm.value ', this.mailForm.value);
    this.mailService.sendMail(this.mailForm.value).subscribe(data => {
      if (data) {
        alert('Your mail has sent successfully.');
      } else {
        alert('Something is error. Please try again.');
      }
    });
  }
}
