import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrl: './confirm-modal.component.css',
    standalone: true
})
export class ConfirmModalComponent {
  constructor(public activeModal: NgbActiveModal){
    
  }
}
