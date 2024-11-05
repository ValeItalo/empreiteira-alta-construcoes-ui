import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-you-dialog',
  standalone: true,
  templateUrl: './thank-you-dialog.component.html',
  styleUrls: ['./thank-you-dialog.component.css'],
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule]
})
export class ThankYouDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
