import { ContactFormService } from './contact-form.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ThankYouDialogComponent } from './thank-you-dialog/thank-you-dialog.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButtonModule, HttpClientModule, CommonModule, MatDialogModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private contactFormService: ContactFormService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      details: new FormControl(null, Validators.required),
    });
  }

  sendEmail() {
    if (this.form.invalid) {
      return;
    }

    const nome = this.form.get('name')?.value;
    const phone = this.form.get('phone')?.value;
    const email = this.form.get('email')?.value;
    const details = this.form.get('details')?.value;

    const to = 'alta.constru.site@gmail.com';
    const subject = 'Contato por meio do site';
    const body = `
      Olá,

      Você recebeu um novo contato pelo site da ALTA CONSTRUÇÕES E REFORMAS.

      **Nome:** ${nome}
      **Telefone:** ${phone}
      **E-mail:** ${email}
      **Detalhes:** ${details}
    `;

    this.openDialog();
    this.contactFormService.sendEmail(to, subject, body);
  }

  openDialog() {
    this.dialog.open(ThankYouDialogComponent).afterClosed().subscribe(() => {
      this.form.reset();
    });
  }
}
