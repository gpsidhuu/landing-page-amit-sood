import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { HttpClient } from "@angular/common/http";
// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-page';
  @ViewChild('f') public f?: HTMLFormElement;

  constructor(public httpClient: HttpClient) {}

  public form: FormGroup = new FormGroup<any>({
    'name': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.email]),
    'phone': new FormControl('', [Validators.required]),
  })

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.httpClient.post('submit.php', this.form.value).subscribe(r => {
      alert('Your details have been submitted.We will get back to you soon');
      this.form.reset();
      this.form.markAsPristine()
    })

  }
}
