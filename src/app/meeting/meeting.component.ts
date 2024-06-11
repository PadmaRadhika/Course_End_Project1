import { Component, inject } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  submitted: boolean = false;
  model: Meeting;
  completeDate: Date;
  localCompleteDate: string;

  constructor(){
    //let model;
    this.completeDate = new Date();
    this.localCompleteDate = this.completeDate.toISOString();
    this.localCompleteDate = this.localCompleteDate.substring(0, 16);
    this.model = new Meeting('Client meeting', 3,  this.localCompleteDate);
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }
  newMeeting() {
    this.model = new Meeting('',0, this.localCompleteDate);
    this.submitted = false;
  }
}
