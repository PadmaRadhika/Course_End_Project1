import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  submitted: boolean = false;
  model: Client;

  constructor(){
    //let model;
    this.model = new Client(-1, 'John Doe', '123 Main Street', 'john@doe.com','abcd');
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
  }
  newClient() {
    this.model = new Client(-1,'','','','');
    this.submitted = false;
  }
}
