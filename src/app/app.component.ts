import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-page';
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
  }
}
