import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  MarvellousForm = new FormGroup
  ({
    username : new FormControl(''),
    email : new FormControl(''),
    phoneno : new FormControl(''),
    address : new FormControl('')
    
  });

}
