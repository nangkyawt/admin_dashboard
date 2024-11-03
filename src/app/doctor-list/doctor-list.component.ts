import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  doctors = [
    { name: 'Mark', specialization: 'Cardiology' },
    { name: 'Jacob', specialization: 'Pediatrics' },
    { name: 'Larry', specialization: 'Orthopedics' },
  ];
}
